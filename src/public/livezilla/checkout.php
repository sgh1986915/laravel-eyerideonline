<?php
/****************************************************************************************
* LiveZilla checkout.php
* 
* Copyright 2014 LiveZilla GmbH
* All rights reserved.
* LiveZilla is a registered trademark.
* 
* Improper changes to this file may cause critical errors.
***************************************************************************************/ 

define("IN_LIVEZILLA",true);

if(!defined("LIVEZILLA_PATH"))
	define("LIVEZILLA_PATH","./");
	
require(LIVEZILLA_PATH . "_definitions/definitions.inc.php");
require(LIVEZILLA_PATH . "_lib/functions.global.inc.php");

require(LIVEZILLA_PATH . "_definitions/definitions.dynamic.inc.php");
require(LIVEZILLA_PATH . "_definitions/definitions.protocol.inc.php");
Server::DefineURL("checkout.php");
@set_error_handler("handleError");

Server::InitDataProvider();
Server::InitDataBlock(array("DBCONFIG"));

if(!empty($_POST["form_visitor_id"]) && !empty($_POST["form_total_price"]) && !empty($_POST["form_currency"]) && is_numeric(($_POST["form_total_price"])) && strlen(($_POST["form_currency"]))<=3)
{
	LocalizationManager::AutoLoad();
	$ticket = new CommercialChatVoucher($_POST["form_voucher_type"],strtoupper(getId(16)));
	$ticket->VisitorId = $_POST["form_visitor_id"];
	$ticket->Company = $_POST["form_company"];
	$ticket->Email = $_POST["form_email"];
	$ticket->Firstname = $_POST["form_firstname"];
	$ticket->Lastname = $_POST["form_lastname"];
	$ticket->Address1 = $_POST["form_address_1"];
	$ticket->Address2 = $_POST["form_address_2"];
	$ticket->ZIP = $_POST["form_zip"];
	$ticket->State = $_POST["form_state"];
	$ticket->Country = $_POST["form_country"];
	$ticket->Phone = $_POST["form_phone"];
	$ticket->City = $_POST["form_city"];
	$ticket->Extends = $_POST["form_extends"];
	
	if(!empty($ticket->Extends))
	{
		$eticket = new CommercialChatVoucher("",$ticket->Extends);
		if($eticket->Load())
		{
			if(!empty($eticket->Extends))
				$ticket->Extends = $eticket->Extends;
		}
		else
			$ticket->Extends = "";
	}
	
	if(!empty(Server::$Configuration->Database["cct"][$_POST["form_voucher_type"]]))
	{
		$ticket->Language = Visitor::$BrowserLanguage;
		$ticket->ChatSessionsMax = Server::$Configuration->Database["cct"][$_POST["form_voucher_type"]]->ChatSessionsMax;
		$ticket->ChatTimeMax = Server::$Configuration->Database["cct"][$_POST["form_voucher_type"]]->ChatTimeMax * 60;
		$ticket->Price = Server::$Configuration->Database["cct"][$_POST["form_voucher_type"]]->Price;

        if(!empty(Server::$Configuration->File["gl_ccsv"]))
			$ticket->VAT = $ticket->GetVAT();

		$ticket->CurrencyISOThreeLetter = Server::$Configuration->Database["cct"][$_POST["form_voucher_type"]]->CurrencyISOThreeLetter;
		$ticket->Save();
		$ticket->SendCreatedEmail();
	}
	$html = IOStruct::GetFile(PATH_TEMPLATES . "payment/paypal.tpl");
	$html = str_replace("<!--account-->",Server::$Configuration->Database["ccpp"]["PayPal"]->Account,$html);
	$html = str_replace("<!--price-->",($_POST["form_total_price"]-$_POST["form_vat"]),$html);
	$html = str_replace("<!--tax-->",($_POST["form_vat"]),$html);
	$html = str_replace("<!--currency-->",($_POST["form_currency"]),$html);
	$html = str_replace("<!--user_id-->",($_POST["form_visitor_id"]),$html);
	$html = str_replace("<!--order_id-->",$ticket->Id,$html);
	$html = str_replace("<!--voucher_id-->",Encoding::Base64UrlEncode($ticket->Id),$html);
	$html = str_replace("<!--server-->",LIVEZILLA_URL,$html);

    $ofc = (!empty($_POST["form_ofc"])) ? "&amp;ofc=MQ__" : "";

	if(!empty($_POST["form_extends"]) && !empty($_POST["form_group"]))
		$html = str_replace("<!--co-->","&amp;co=" . Encoding::Base64UrlEncode($_POST["form_extends"]) . "&amp;intgroup=" . Encoding::Base64UrlEncode($_POST["form_group"]) . $ofc,$html);
	else if(!empty($_POST["form_group"]))
		$html = str_replace("<!--co-->","&amp;intgroup=" . Encoding::Base64UrlEncode($_POST["form_group"]) . $ofc,$html);
	else
		$html = str_replace("<!--co-->",$ofc,$html);
		
	exit($html);
}
else if(!empty($_GET["confirm"]) && $_GET["confirm"]=="1" && !empty($_GET["vc"]) && strlen(Encoding::Base64UrlDecode($_GET["vc"]))==16)
{
	require(LIVEZILLA_PATH . "_lib/functions.pp.paypal.inc.php");
	$voucher = new CommercialChatVoucher("",Encoding::Base64UrlDecode($_GET["vc"]));
	if($voucher->Load())
	{
		if(PayProvValidatePayment($voucher->Price))
		{
			LocalizationManager::AutoLoad($voucher->Language);
			$voucher->SetPaymentDetails(PayProvGetPaymentId(),PayProvGetPayerId(),PayProvGetPaymentDetails());
			if(empty($PAYMENTERROR))
				$voucher->SetVoucherParams(!empty($voucher->Voided),true,false,false,false,true,Encoding::Base64UrlDecode($_GET[GET_EXTERN_GROUP]));
			else
				$voucher->SetVoucherParams(!empty($voucher->Voided),false,false,false,false);
		}
	}
}
Server::UnloadDataProvider();
?>
