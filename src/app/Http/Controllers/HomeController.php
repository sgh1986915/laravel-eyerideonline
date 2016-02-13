<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function solutions()
    {
        return view('solutions');
    }
    public function company()
    {
        return view('company');
    }

    public function roi()
    {
        return view('roi');
    }

    public function mail(Request $request)
    {
        $captcha = $request->get('g-recaptcha-response');

        if (isset($captcha) && $captcha != "") {
            $fromEmail = $request->get('email');
            $fromName = $request->get('name');
            $company = $request->get('company');
            $phone = $request->get('phone');
            $body = $request->get('message');

            Mail::send('emails.message', ['body' => $body, 'name' => $fromName, 'company' => $company, 'phone' => $phone, 'email' => $fromEmail], function ($m) {
                $m->to('sales@eyerideonline.com', 'Sales')->subject('New message from eyerideonline.com');
                $m->to('mwiegler@eyerideonline.com', 'EyeRide Info')->subject('New message from eyerideonline.com');
                $m->to('mwiegler@mitechtechnology.com', 'EyeRide Info')->subject('New message from eyerideonline.com');
            });

            \Session::flash('message', 'Thank you for your message!');
        }

        return redirect()->route('company');
    }
}
