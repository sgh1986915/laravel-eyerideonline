if(typeof(encodeURIComponent) == 'undefined')
{
	encodeURIComponent = function(uri)
	{
		return (escape(uri));
	}
}

function lz_array_indexOf(_hsa,_needle)
{

    if(_hsa!=null)
        for(var i=0; i<_hsa.length; i++)
            if(_hsa[i]==_needle)
                return i;
    return -1;
}

function lz_format_time_span(_seconds)
{
	var negative = false;
	
	if(_seconds < 0)
	{
		negative = true;
		_seconds *= -1;
	}
	
	var days = Math.floor(_seconds / 86400);
	_seconds = _seconds - (days * 86400);
	var hours = Math.floor(_seconds / 3600);
	_seconds = _seconds - (hours * 3600);
	var minutes = Math.floor(_seconds / 60);
	_seconds = _seconds - (minutes * 60);
	
	var string = "";
	if(days > 0)string += days+".";
	if(hours >= 10)string += hours+":";
	else if(hours < 10)string += "0"+hours+":";
	if(minutes >= 10)string += minutes+":";
	else if(minutes < 10)string += "0"+minutes+":";
	if(_seconds >= 10)string += _seconds.toString();
	else if(_seconds < 10)string += "0"+_seconds.toString();
	
	if(negative)
		return "-" + string
	return string;
}

function lz_jssess()
{	
	this.Save = lz_jssess_save;
	this.Load = lz_jssess_load;
	
	this.DelimiterStart = "LZSDS";
	this.DelimiterEnd = "LZSDE";

	this.GeoResolutions = 0;
	this.GeoResolved = new Array();
	this.UserId = lz_user_id;
	this.BrowserId = lz_browser_id;
	this.ServerId = lz_server_id;
	this.OVLCPos = "";
	this.OVLCState = "0";
	this.OVLCSound = 1;
    this.Transcript = 1;
	this.OVLCWM = 0;
    this.ECH = 0;
    this.TransFrom = "";
    this.TransInto = "";
    this.TransSID = "";
    this.KBS = 1;

	function lz_jssess_save()
	{
		var data = this.DelimiterStart + lz_global_base64_url_encode(this.BrowserId + ";" + this.UserId + ";" + this.GeoResolved  + ";" + this.GeoResolutions+ ";" + this.ServerId + ";"+ this.OVLCPos + ";"+ this.OVLCState + ";" + this.OVLCSound + ";" + this.OVLCWM + ";" + this.ECH + ";" + this.TransFrom + ";"+ this.TransInto + ";"+ this.TransSID + ";"+ this.Transcript + ";"+ this.KBS + ";") + this.DelimiterEnd;
		if(window.name == null || window.name == "undefinded" || window.name  == "" || (window.name == null && window.name.indexOf(this.DelimiterStart) == -1))
		{
			if(window.name == null || window.name == "undefinded" || window.name  == "")
				window.name = data;
			else
				window.name += data;
		}
		else
		{
			var regex = new RegExp(/\LZSDS.*?LZSDE/g);
			window.name = window.name.replace(regex,"");
			window.name += data;
		}
	}
	
	function lz_jssess_load()
	{
		var data = window.name;
		if(data.indexOf(this.DelimiterStart) != -1)
		{
			data = lz_global_base64_url_decode(data.split(this.DelimiterStart)[1].split(this.DelimiterEnd)[0]).split(";");
			if(this.ServerId == data[4])
			{
				this.BrowserId = data[0];
				this.UserId = data[1];
				this.GeoResolved = data[2].split(",");
				this.GeoResolutions = data[3];
				this.OVLCPos = data[5];
				this.OVLCState = data[6];
				this.OVLCSound = data[7];
				this.OVLCWM = parseInt(data[8]);
                this.ECH = parseInt(data[9]);
                this.TransFrom = data[10];
                this.TransInto = data[11];
                this.TransSID = data[12];
                this.Transcript = data[13];
                this.KBS = data[14];
			}
		}
	}
}

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

function lz_chat_window()
{
	this.BrowserId = "";
	this.LastActive = 0;
	this.Closed = false;
	this.Deleted = false;
}

function lz_geo_resolver()
{
	this.ResolveAsync = lz_resolver_connect_async;
	this.TimeoutConnection = lz_resolver_timeout_connection;
	this.SetStatus = lz_resolver_set_status;
	this.SetSpan = lz_resolver_set_span;
	this.Status = 0;
	this.Span = 0;
	
	this.OnEndEvent;
	this.OnTimeoutEvent;	
	this.OnSpanEvent;	
	
	var OnEnd;
	var OnTimeout;
	var OnSpan;

	var lz_resolver_request;
	var lz_resolver_timeout_timer;
	
	function lz_resolver_connect_async()
	{
		OnEnd = this.OnEndEvent;
		OnTimeout = this.OnTimeoutEvent;
		OnSpan = this.OnSpanEvent;
		
		lz_resolver_timeout_timer = setTimeout(this.TimeoutConnection,15000);
		lz_resolver_request = document.createElement("script");
		lz_resolver_request.id = "livezilla_geoscript";

		lz_resolver_request.async = true;
		lz_resolver_request.src = lz_geo_url + "&gv=1021&method=" + OnEnd + "&spanm=" + OnSpan + "&oak=" + lz_oak + "&ip=" + lz_mip;
		lz_document_head.appendChild(lz_resolver_request);
	}

	function lz_resolver_timeout_connection()
	{
		if(OnTimeout != null)
			OnTimeout();
	}
	
	function lz_resolver_set_status(_status)
	{
		this.Status = _status;
	}
	
	function lz_resolver_set_span(_span)
	{
		this.Span = _span;
	}
}

function lz_global_get_window_height()
{
	return (lz_is_ie) ? document.documentElement.offsetHeight : window.innerHeight;
}

function lz_global_get_window_width(_inner)
{
    if(!_inner)
    {
        var rElm = document.documentElement.offsetHeight ? document.documentElement : document.body;
        return rElm.clientWidth;
    }
    else
        return ((lz_is_ie) ? document.documentElement.offsetWidth : window.innerWidth);
}

function lz_global_replace_breaks(_text)
{
	_text = _text.replace(/[\r\n]+/g, "<br>");
	return _text.replace(/[\t]+/g, "&nbsp;&nbsp;&nbsp;");
}

function lz_global_base64_url_encode(_text)
{
	if(_text.length == 0)
		return "";

	_text = lz_global_base64_encode(_text.toString());
	_text = _text.replace(/=/g, "_");
	_text = _text.replace(/\+/g, "-");
	_text = _text.replace(/\//g, ",");
	return _text;
}

function lz_global_base64_url_decode(_text)
{
	if(!(_text != null && _text.length > 0))
		return "";
		
	_text = _text.replace(/_/g,"=");
	_text = _text.replace(/-/g,"+");
	_text = _text.replace(/,/g,"/");
	_text = lz_global_base64_decode(_text);
	return _text;
}
	
function lz_global_base64_decode(_text)
{
	var base64_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;
	_text = _text.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	while (i < _text.length) 
	{
		enc1 = base64_chars.indexOf(_text.charAt(i++));
		enc2 = base64_chars.indexOf(_text.charAt(i++));
		enc3 = base64_chars.indexOf(_text.charAt(i++));
		enc4 = base64_chars.indexOf(_text.charAt(i++));
		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;
		output = output + String.fromCharCode(chr1);
		if (enc3 != 64) 
		{
			output = output + String.fromCharCode(chr2);
		}
		if (enc4 != 64) 
		{
			output = output + String.fromCharCode(chr3);
		}
	}
	output = lz_global_utf8_decode(output);
	return output;
}

function lz_global_base64_encode(_input) 
{
	var base64_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var output = "";
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	var i = 0;

	_input = lz_global_utf8_encode(_input);
	while (i < _input.length) 
	{
		chr1 = _input.charCodeAt(i++);
		chr2 = _input.charCodeAt(i++);
		chr3 = _input.charCodeAt(i++);
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;
		if(isNaN(chr2)) 
		{
			enc3 = enc4 = 64;
		} 
		else if(isNaN(chr3)) 
		{
			enc4 = 64;
		}
		output = output + base64_chars.charAt(enc1) + base64_chars.charAt(enc2) +	base64_chars.charAt(enc3) + base64_chars.charAt(enc4);
	}
	return output;
}

function lz_global_utf8_encode(_string) 
{
	_string = _string.replace(/\r\n/g,"\n");
	var enc = "";
	for (var n = 0; n < _string.length; n++) 
	{
		var c = _string.charCodeAt(n);
		if (c < 128) 
		{
			enc += String.fromCharCode(c);
		}
		else if((c > 127) && (c < 2048))
		{
			enc += String.fromCharCode((c >> 6) | 192);
			enc += String.fromCharCode((c & 63) | 128);
		}
		else 
		{
			enc += String.fromCharCode((c >> 12) | 224);
			enc += String.fromCharCode(((c >> 6) & 63) | 128);
			enc += String.fromCharCode((c & 63) | 128);
		}
	}
	return enc;
}

function lz_global_utf8_decode(_string) 
{
    try
    {
        var dec = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < _string.length)
        {
            c = _string.charCodeAt(i);
            if (c < 128)
            {
                dec += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224))
            {
                c2 = _string.charCodeAt(i+1);
                dec += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else
            {
                c2 = _string.charCodeAt(i+1);
                c3 = _string.charCodeAt(i+2);
                dec += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return dec;
    }
    catch(ex)
    {

    }
    return "";
}

function lz_set_title_mode()
{
    window.title = document.title = lz_title_modes[lz_title_step++ % 2];
}

function lz_switch_title_mode(_active)
{
	if(_active)
	{
		if(lz_title_timer == null)
			lz_title_timer = setInterval("lz_set_title_mode()",1000);
	}
	else if(lz_title_timer != null)
	{
		clearInterval(lz_title_timer);
		lz_title_timer = null;
   		document.title = lz_title_modes[0];
		lz_title_step = 0;
	}
}

function lz_global_timestamp()
{
	var now = new Date();
	var ts = Math.round((now.getTime()/1000));
	return (ts);
}

function lz_global_get_time(_ts)
{
    var date = new Date(parseInt(_ts)*1000);
    var timeStr = date.toLocaleTimeString();
    if(timeStr=="Invalid Date")
        return _ts;
    return timeStr;
}

function lz_global_microstamp()
{
	var now = new Date();
	var ts = now.getTime();
	return (ts);
}

function lz_global_get_long_poll_runtime()
{
	if(lz_chat_data.LastConnectionFailed)
		return 20;
	var value = lz_chat_data.PollTimeout - lz_chat_data.ChatFrequency - 25;
	if(value >= 60)
		value = 65;
	return value;
}

function lz_chat_get_locale_time()
{
	var time = new Date().toLocaleTimeString()
	time = time.split(" (");
	return time[0];
}

function lz_chat_get_locale_date()
{
	var date = new Date().toLocaleString();
	date = date.split(" (");
	return date[0];
}

function lz_global_handle_exception(exception,file,line)
{
	//alert(exception+file+line);
	return true;
}

function lz_global_trim(_str) 
{
	return _str.replace(/^\s+|\s+$/g,"");
}

function lz_global_htmlentities(_value) 
{
	_value = _value.replace(/\</g,"&lt;");
	_value = _value.replace(/\>/g,"&gt;");
	return _value;
}

function lz_global_get_page_offset_y()
{
	if(window.pageYOffset != null)
		return window.pageYOffset;
	else
		return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function lz_global_get_page_offset_x()
{
	return 0;
	if(window.pageXOffset != null)
	{
		return window.pageXOffset;
	}
	else
	{
		return Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
	}
}

function lz_global_impose_max_length(_object, _max)
{
    if(_object.value.length > _max)
        _object.value = _object.value.substring(0,_max);
}

function lz_chat_save_input_value(_id,_value,_doc)
{
    try
    {
        if(lz_array_indexOf(lz_chat_data.InputFieldIndices,_id) > -1)
            lz_chat_data.InputFieldValues[lz_array_indexOf(lz_chat_data.InputFieldIndices,_id)].Value = _value.toString();

        if(_id == 114 && lz_shared_kb_auto_search)
        {
            if(_value.length > 10)
            {
                if(lz_shared_kb_last_search_time < (lz_global_timestamp()-2))
                {
                    if (typeof lz_chat_get_frame_object == 'function')
                        lz_chat_get_frame_object('lz_chat_kb_input').value = _value;
                    lz_chat_init_search_kb(true,true);
                }
            }
        }
    }
    catch(e){}
    return true;
}

function lz_chat_get_input_value(_id)
{
    try{return lz_chat_data.InputFieldValues[lz_array_indexOf(lz_chat_data.InputFieldIndices,_id)].Value;}
    catch(e) {return "";}
}

function lz_chat_get_input(_index)
{
    for(var i = 0;i< lz_chat_data.InputFieldIndices.length;i++)
    {
        var findex = lz_chat_data.InputFieldIndices[i];
        if(_index == findex)
            return lz_chat_data.InputFieldValues[i];
    }
    return null;
}

function lz_group(_id,_amount,_description,_email,_document,_cihidden,_cimandatory,_tihidden,_timandatory,_cinf,_cmbinf,_tinf,_com)
{
    this.Id = _id;
    this.Amount = _amount;
    this.Description = (_description.length > 0) ? _description : _id;
    this.ChatInformation = _cinf;
    this.TicketInformation = _tinf;
    this.CallMeBackInformation = _cmbinf;
    this.Email = _email;
    this.Option = null;
    this.ActiveDocument = _document;
    this.UpdateOption = lz_group_create_option;
    this.Update = lz_group_update;
    this.Changed = false;
    this.UpdateOption();
    this.ChatInputsHidden = _cihidden;
    this.ChatInputsMandatory = _cimandatory;
    this.TicketInputsHidden = _tihidden;
    this.TicketInputsMandatory = _timandatory;
    this.ChatVouchersRequired =  _com;
    this.StatusIcon = true;

    function lz_group_create_option()
    {
        try
        {
            if(this.Option == null)
                this.Option = this.ActiveDocument.createElement('option');

            this.Option.value = this.Id;
            this.Option.name = this.Email;
            this.Option.group = this;

            if(this.Amount == 0)
            {
                this.Option.style.color = "#787878";
                this.Option.style.background = "#f7f7f7";
            }
            else
            {
                this.Option.style.color = "#000000";
                this.Option.style.background = "#FFFFFF";
            }
            this.Option.label = " " + this.Description;
            this.Option.text = " " + this.Description;
        }
        catch(e)
        {


        }

    }

    function lz_group_update(_id,_amount,_description,_email)
    {
        if(this.Id != _id || this.Amount != _amount || this.Description != ((_description.length > 0) ? _description : _id) || this.Email != _email)
        {
            this.Id = _id;
            this.Amount = _amount;
            this.Description = (_description.length > 0) ? _description : _id;
            this.Email = _email
            this.Changed = true;
        }
        else
            this.Changed = false;
    }
}

function lz_group_list(_document,_selectBox)
{
    this.HeaderOnline = null;
    this.HeaderOffline = null;
    this.ForceSelectOption = null;
    this.ForceSelectMade=false;
    this.Groups = new Array();
    this.SelectBox = _selectBox;
    this.ActiveDocument = _document;
    this.GroupOnline = false;
    this.GroupOffline = null;
    this.StatusIcon = true;

    this.Add = lz_group_list_add;
    this.Update = lz_group_list_update;
    this.Place = lz_group_list_place_group;
    this.CreateHeader = lz_group_list_create_header;
    this.PlaceGroup = lz_group_list_place_group;
    this.GetGroupById = lz_group_list_get_group_by_id;
    this.SelectGroupById = lz_group_list_select_group_by_id;

    function lz_group_list_add(_id,_amount,_description,_email,_cihidden,_cimandatory,_tihidden,_timandatory,_cinf,_cmbinf,_tinf,_com)
    {
        var existing = false;
        var currentGroup;
        var lastGroup;
        for(var i=0;i<this.Groups.length;i++)
        {
            if(this.Groups[i].Id == _id)
            {
                this.Groups[i].Update(_id,_amount,_description,_email);
                currentGroup = this.Groups[i];
                existing = true;
                break;
            }
        }

        if(!existing)
        {
            currentGroup = new lz_group(_id,_amount,_description,_email,this.ActiveDocument,_cihidden,_cimandatory,_tihidden,_timandatory,_cinf,_cmbinf,_tinf,_com);
            currentGroup.StatusIcon = this.StatusIcon;
            this.Groups.push(currentGroup);
        }

        this.PlaceGroup(currentGroup,lastGroup,!existing);
        lastGroup = currentGroup;
    }

    function lz_group_list_update(_groups)
    {

        try
        {
            if(_groups.length == 0)
            {
                for(var i = 0;i <this.SelectBox.length;i++)
                    if(this.SelectBox.options[i] != this.HeaderOffline)
                        this.SelectBox.removeChild(this.SelectBox.options[i]);

                if(this.HeaderOffline != null && this.HeaderOffline.parentNode != this.SelectBox)
                    this.SelectBox.appendChild(this.HeaderOffline);
            }
            else
            {
                var addedGroups = Array();
                var groups = _groups.split(";");

                this.GroupOnline =
                    this.GroupOffline = false;

                if(this.HeaderOffline && (this.HeaderOffline.parentNode == null || (this.HeaderOffline.parentNode != null && this.HeaderOffline.parentNode != this.SelectBox)))
                    this.SelectBox.appendChild(this.HeaderOffline);

                for(var i = 0;i <groups.length;i++)
                {
                    contents = groups[i].split(",");
                    addedGroups.push(lz_global_base64_decode(contents[0]));
                    this.GroupOnline = (this.GroupOnline || lz_global_base64_decode(contents[1]) > 0);
                    this.GroupOffline = (this.GroupOffline || lz_global_base64_decode(contents[1]) == 0);
                    this.Add((lz_global_base64_decode(contents[0])),(lz_global_base64_decode(contents[1])),(lz_global_base64_decode(contents[2])),lz_global_base64_decode(contents[3]),eval(lz_global_base64_decode(contents[4])),eval(lz_global_base64_decode(contents[5])),eval(lz_global_base64_decode(contents[6])),eval(lz_global_base64_decode(contents[7])),lz_global_base64_decode(contents[8]),lz_global_base64_decode(contents[9]),lz_global_base64_decode(contents[10]),eval(lz_global_base64_decode(contents[11])));
                }

                if(this.HeaderOnline != null)
                {
                    if(!this.GroupOnline && this.HeaderOnline.parentNode == this.SelectBox)
                        this.SelectBox.removeChild(this.HeaderOnline);
                    else if(this.GroupOnline && (this.HeaderOnline.parentNode == null || (this.HeaderOnline.parentNode != null && this.HeaderOnline.parentNode != this.SelectBox)))
                        this.SelectBox.insertBefore(this.HeaderOnline,this.SelectBox.childNodes[0]);
                }

                if(!this.GroupOffline && this.HeaderOffline != null && this.HeaderOffline.parentNode == this.SelectBox)
                    this.SelectBox.removeChild(this.HeaderOffline);
                if(this.Groups.length > addedGroups.length)
                {
                    var existing;
                    for(var i = 0;i <this.Groups.length;i++)
                    {
                        existing = false;
                        for(var j = 0;j <addedGroups.length;j++)
                        {
                            if(addedGroups[j] == this.Groups[i].Id)
                                existing = true;
                        }
                        if(!existing)
                        {
                            this.Groups[i].Option.parentNode.removeChild(this.Groups[i].Option);
                            this.Groups.splice(i,1);
                        }
                    }
                }

                if(this.SelectBox != null)
                    lz_chat_change_group(this.SelectBox,false);

                if(lz_chat_data.ForceGroupSelect && !lz_chat_data.ForceSelectMade)
                {
                    if(this.ForceSelectOption != null && this.ForceSelectOption.parentNode == null)
                    {
                        this.SelectBox.appendChild(this.ForceSelectOption);
                        this.SelectBox.selectedIndex=this.SelectBox.childNodes.length-1;
                        this.SelectBox.style.backgroundImage = "none";
                    }
                }
            }
        }
        catch(e)
        {

        }


    }

    function lz_group_list_place_group(_group,_lastGroup,_new)
    {
        if(_group != null && _group.Option != null && _group.Option.parentNode != this.SelectBox || _group.Changed)
            if(_group.Amount > 0)
            {
                this.SelectBox.insertBefore(_group.Option,this.HeaderOffline);
            }
            else
            {
                this.SelectBox.appendChild(_group.Option);
            }

        _group.UpdateOption();
    }

    function lz_group_list_create_header(_pleaseSelectTitle)
    {
        if(this.SelectBox.childNodes.length == 0)
        {
            this.ForceSelectOption = this.ActiveDocument.createElement('option');
            this.ForceSelectOption.text = _pleaseSelectTitle;
            this.ForceSelectOption.style.color = "#000000";
            this.ForceSelectOption.style.background = "#FFFFFF";
            this.ForceSelectOption.style.backgroundImage = "none";
        }
    }

    function lz_group_list_get_group_by_id(_id)
    {
        for(var i = 0;i <this.Groups.length;i++)
        {
            if(this.Groups[i].Id == _id)
                return this.Groups[i];
        }
        return null;
    }

    function lz_group_list_select_group_by_id(_id,_box)
    {
        for(var i = 0;i < _box.length;i++)
        {
            if(_id == _box.childNodes[i].value)
            {
                _box.selectedIndex = i;
                return;
            }
        }


    }
}

function lz_chat_input(_index,_active,_caption,_infoText,_name,_type,_value,_validation,_validationURL,_validationTimeout,_validationContinueOnTimeout)
{
    this.Index = _index;
    this.Active = _active;
    this.Caption = lz_global_base64_decode(_caption);
    this.InfoText = lz_global_base64_decode(_infoText);
    this.Name = lz_global_base64_decode(_name);
    this.Type = _type;
    this.Value = lz_global_base64_decode(_value);
    this.Validation = _validation;
    this.ValidationURL = lz_global_base64_decode(_validationURL);
    this.ValidationTimeout = _validationTimeout;
    this.ValidationContinueOnTimeout = _validationContinueOnTimeout;
    this.ValidationScript;
    this.ValidationTimeoutObject = null;
    this.ValidationContinueAt;
    this.Validated = false;
    this.ValidationResult = null;
    //this.ValidationFrame;
    this.Validate = lz_chat_input_validate;
    this.SetStatus = lz_chat_input_set_status;
    this.IsHiddenGeneral = lz_chat_is_hidden_general;

    function lz_chat_input_validate(_contFunc)
    {
        this.ValidationContinueAt = _contFunc+"()";
        this.ValidationTimeoutObject = setTimeout('lz_validate_input_result(-1,'+this.Index.toString()+')',this.ValidationTimeout*1000);
        var get = this.ValidationURL.replace('<!--input_id-->',this.Index.toString()).replace('<!--value-->',this.Value);
        if(get.indexOf("?") != -1)
            get += "&timestamp=" + lz_global_timestamp();
        else
            get += "?timestamp=" + lz_global_timestamp();
        var newScript = document.createElement("script");
        newScript.id = "livezilla_vscript" + this.Index.toString();
        newScript.src = get;
        document.getElementsByTagName("head")[0].appendChild(newScript);
    }

    function lz_chat_input_set_status(_frame,_enabled)
    {
        if(_frame != null)
            if(lz_chat_get_frame_object('').getElementsByName("form_"+this.Index).length == 1)
                lz_chat_get_frame_object('').getElementsByName("form_"+this.Index)[0].disabled=!_enabled;
    }

    function lz_chat_is_hidden_general(_groups,_chat)
    {
        try{
        for(var i = 0;i < _groups.length;i++)
        {
            if(_chat && lz_array_indexOf(_groups[i].ChatInputsHidden,this.Index) > -1)
                return true;
            else if(!_chat && lz_array_indexOf(_groups[i].TicketInputsHidden,this.Index) > -1)
                return true;
        }
        }catch(ex){}
        return false;
    }
}

function lz_chat_execute(_js)
{
    try
    {
        eval(lz_global_base64_decode(_js));
    }
    catch(ex)
    {

    }
}

function lz_fade_in(_element,_freq)
{
    var op = 0;
    var timer = setInterval(function ()
    {
        if (op >= 1)
            clearInterval(timer);
        if (op >= 0.1)
            _element.style.display = '';
        _element.style.opacity = op;
        op += 0.1;
    }, _freq);
}

function lz_fade_out(_element,_freq)
{
    var op = 1;
    var timer = setInterval(function ()
    {
        if (op <= 0.1)
        {
            clearInterval(timer);
            _element.style.display = 'none';
        }
        _element.style.opacity = op;
        op -= 0.1;
    }, _freq);
}