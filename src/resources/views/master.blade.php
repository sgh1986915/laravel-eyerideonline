<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Design Studies Theme">
    <meta name="author" content="">
    <link rel="shortcut icon" href="{{ asset('img/favicon.png') }}">
    <title>EYERIDE</title>
    <link rel="stylesheet" href="{{ asset('css/all.css') }}">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>

<body data-spy="scroll" data-offset="65" data-target=".float-menu-products">

    @include('partials._navigation')

    @yield('content')
    <div id="info">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-4 col-xs-12">
                    <i class="fa fa-phone"><a href="tel:8886686698">888 668 6698</a></i>
                </div>
                <div class="col-lg-3 col-sm-5 col-xs-12">
                    <i class="fa fa-envelope"></i><a href="mailto:info@eyerideonline.com">info@eyerideonline.com</a>
                </div>
                <div class="col-lg-5 col-sm-3 col-xs-12">
                    <i class="fa fa-map-marker"></i>
                    <adress class="adress">4737 Orange Drive, Fort Lauderdale, FL. 33314</adress>
                </div>
            </div>
        </div>
    </div>
    <div id="footerwrap">
        <div class="container">
            <div class="row">
                <div class="col-md-50 col-sm-6 col-xs-6">
                    <i class=""><img src="{{ asset('img/footer/solutions-icon.png') }}"></i>
                    <h2>Solutions</h2>
                    <ul>
                        <li><a href="{{ route('solutions') }}">Solution Overview</a></li>
                        <li><a href="{{ route('solutions') }}#tab_industries">Fleet Application</a></li>
                        <li><a href="{{ route('product.show', 32) }}">Control Center</a></li>
                        <li><a href="{{ route('product.show', 33) }}">Remote Site</a></li>
                        <li><a href="{{ route('roi') }}">ROI Calculator</a></li>
                        <li><a href="{{ route('customer.index') }}">Case Studies</a></li>
                    </ul>
                </div>
                <div class="col-md-50 col-sm-6 col-xs-6">
                    <i class=""><img src="{{ asset('img/footer/products-icon.png') }}"></i>
                    <h2>Products</h2>
                    <ul>
                        <li><a href="{{ route('product.index') }}#mdvr">MDVR</a></li>
                        <li><a href="{{ route('product.index') }}#cameras">Cameras</a></li>
                        <li><a href="{{ route('product.index') }}#gps">Eye Lite GPS</a></li>
                        <li><a href="{{ route('product.index') }}#wifionboard">Wifi Onboard</a></li>
                        <li><a href="{{ route('product.index') }}#antennas">Antennas</a></li>
                        <li><a href="{{ route('product.index') }}#microphonesandspeakers">Microphone and Speakers</a></li>
                        <li><a href="{{ route('product.index') }}#monitor">Monitors</a></li>
                        <li><a href="{{ route('product.index') }}#mobilecomputer">Mobile Computers</a></li>
                        <li><a href="{{ route('product.index') }}#fleetaccesscontrol">Mobile Access Control</a></li>
                        <li><a href="{{ route('product.index') }}#miscellaneous">Accesories</a></li>
                    </ul>
                </div>
                <div class="col-md-50 col-sm-6 col-xs-6">
                    <i class=""><img src="{{ asset('img/footer/company-icon.png') }}"></i>
                    <h2>Company</h2>
                    <ul>
                        <li><a href="{{ route('company') }}#mission">Mission</a></li>
                        <li><a href="{{ route('company') }}#technology">Technoloogy</a></li>
                        <li><a href="{{ route('company') }}#partner-members">Partner Members</a></li>
                        <li><a href="{{ route('company') }}#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-md-50 col-sm-6 col-xs-6">
                    <i class=""><img src="{{ asset('img/footer/support-icon.png') }}"></i>
                    <h2>Support</h2>
                    <ul>
                        <li><a href="">Manual and Guides</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">Marketing</a></li>
                    </ul>
                </div>
                <div class="col-md-50 col-sm-6 col-xs-6">
                    <i class=""><img src="{{ asset('img/footer/social-icon.png') }}"></i>
                    <h2>Social</h2>
                    <ul>
                        <li><a href="https://www.facebook.com/EyeRideGPS">Facebook</a></li>
                        <li><a href="https://twitter.com/EyeRide_AIO">Twitter</a></li>
                        <li><a href="https://www.youtube.com/channel/UCpibHZtQwpLF3BcxV7oPAjg">Youtube</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="terms">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <img src="{{ asset('img/footer/logo.png') }}">
                        <p>&#x24B8; 2015 Mitech Technology LLC. All rights reserved.</p>
                        <a href="/terms">Terms of Service</a> |
                        <a href="/privacy">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script> -->
    <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="{{ asset('/js/all.js') }}"></script>
    <script>
        $( window ).scroll(function() {
            var scroll = $(window).scrollTop();
            
            if (scroll > 0) {
                $('.navbar').css('padding-top', '5px');
                $('.navbar').css('padding-bottom', '5px');
            } else {
                $('.navbar').css('padding-top', '50px');
                $('.navbar').css('padding-bottom', '20px');
            }
        });
    </script>
    @yield('scripts')
<!-- LiveZilla Chat Button Link Code (ALWAYS PLACE IN BODY ELEMENT) --><!-- LiveZilla Tracking Code (ALWAYS PLACE IN BODY ELEMENT) --><div id="livezilla_tracking" style="display:none"></div><script type="text/javascript">
var script = document.createElement("script");script.async=true;script.type="text/javascript";var src = "http://www.mitechtechnology.com/live/server.php?a=bf4e2&request=track&output=jcrpt&en=<!--replace_me_with_b64url_name-->&ee=<!--replace_me_with_b64url_email-->&el=<!--replace_me_with_b64url_language-->&ep=<!--replace_me_with_b64url_phone-->&eq=<!--replace_me_with_b64url_question-->&eh=<!--replace_me_with_b64url_header_url-->&ec=<!--replace_me_with_b64url_company-->&mp=MQ__&fbpos=10&fbml=0&fbmt=0&fbmr=0&fbmb=0&fbw=22&fbh=135&nse="+Math.random();setTimeout("script.src=src;document.getElementById('livezilla_tracking').appendChild(script)",1);</script><noscript><img src="http://www.mitechtechnology.com/live/server.php?a=bf4e2&amp;request=track&amp;output=nojcrpt&amp;en=<!--replace_me_with_b64url_name-->&amp;ee=<!--replace_me_with_b64url_email-->&amp;el=<!--replace_me_with_b64url_language-->&amp;ep=<!--replace_me_with_b64url_phone-->&amp;eq=<!--replace_me_with_b64url_question-->&amp;eh=<!--replace_me_with_b64url_header_url-->&amp;ec=<!--replace_me_with_b64url_company-->&amp;mp=MQ__" width="0" height="0" style="visibility:hidden;" alt=""></noscript><!-- http://www.LiveZilla.net Tracking Code --><div style="display:none;"><a href="javascript:void(window.open('http://www.mitechtechnology.com/live/chat.php?a=4a589&amp;en=<!--replace_me_with_b64url_name-->&amp;ee=<!--replace_me_with_b64url_email-->&amp;el=<!--replace_me_with_b64url_language-->&amp;ep=<!--replace_me_with_b64url_phone-->&amp;eq=<!--replace_me_with_b64url_question-->&amp;eh=<!--replace_me_with_b64url_header_url-->&amp;ec=<!--replace_me_with_b64url_company-->&amp;mp=MQ__','','width=590,height=760,left=0,top=0,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))" class="lz_fl"><img id="chat_button_image" src="http://www.mitechtechnology.com/live/image.php?a=151f7&amp;id=5&amp;type=overlay" width="22" height="135" style="border:0px;" alt="LiveZilla Live Chat Software"></a></div><!-- http://www.LiveZilla.net Chat Button Link Code -->

  </body>
</html>