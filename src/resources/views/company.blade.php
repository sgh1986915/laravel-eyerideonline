@extends('master')

@section('content')
<!-- ==== HEADERWRAP ==== -->
<div id="headerwrap-solutions">
    @if (Session::has('message'))
        <script>alert('{{ Session::get('message') }}')</script>
    @endif
    <header>
        <h1>Meet the team behind the ultimate reality check</h1>
        <p>Trust EyeRide to tell the truth, the whole truth and nothing but the truth.</p>
    </header>
</div>
<div class="header-blue-company">
    <div class="container-fluid">
        <h1>Meet EyeRide&#0153;</h1>
    </div>
</div>
<div class="sectionOne company-sectinone">
    <div class="container-fluid">
        <img src="img/company/company-section1.jpg">
        <!-- background image container holder -->
    </div>
</div>
<div class="technology" id="mission">
    <div class="container">
        <h1>Get a grasp on total awareness</h1>
        <p>EyeRide literally shows your business in a way you’ve never seen it before: every
        little detail that makes up the whole. Covering all aspects of your operations with the
        most frequent GPS updates and continuously streaming live video, audio and vehicle
        sensor data, EyeRide enable you to always make informed choices – whether it’s to
        take immediate action or make strategies for the future.</p>
        <p>We are the world leader in military-grade mobile real-time remote supervision, control and communications systems. Our product range is
        built around web-based access to versatile EyeRide vehicle units, into which you can plug up to 8 cameras and a number of other hardware to
        suit your particular needs, with features including the only per-second GPS updates, high-resolution mobile video streaming and automatic
        driver prompts available on the civilian market.</p>
        <p>Nearly 80% of all revenue is invested back into research and development, so a number of upgrades and entirely new products are always in
        the pipeline, ensuring that our clients can benefit from the very latest technology. Because once you have realized the edge you get by
        being fully informed at all times, you won’t even want to imagine going back to making educated guesses.</p>
        <p>Nothing beats knowing for sure.</p>
    </div>
</div>
<div class="sectionOne mission-sectionone">
    <div class="container-fluid">
        <img src="img/company/whatwebelieve.png">
        <!-- background image container holder -->
    </div>
</div>
<div class="believe" id="#technology">
    <div class="container">
        <h1>Focus on your points of view</h1>
        <p>Built to the uncompromising standards of the Israeli security industry, EyeRide is
        today headquartered in Davie, Florida, and our client base includes all branches of the
        US military, Department of Defense and Coast Guard as well as numerous state and
        local police agencies across the country, heavy industry and transport and security
        companies. Development teams are located in the US, Poland and Israel, and we have
        licensed contractors installing EyeRide products right around the world. Of course,
        we could go on to tell you about our technological knowledge, our cutting-edge
        engineering and our rigorous quality control. But in a sense, perhaps that would send
        you the wrong message?</p>
        <p>As a matter of fact, our greatest interest is your reality.</p>
    </div>
</div>
<div class="border-divider-orange">
    <div class="container-fluid">
        <!-- Border bottom arrow -->
    </div>
</div>

<div class="founded">
    <div class="container-fluid">
        <div class="row">
            <div class="container">
                <div class="col-md-12">
                    <img src="img/company/flag.jpg">
                    <h2>Founded in 2005</h2>
                    <hr/>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <h1><span class="timer" data-from="0" data-to="24809500">24,809,500</span class="special">K<span>&#43;</span></h1>
                    <p class="muted">Miles Driven with the EyeRide system</p>
                    <hr/>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <h1><span class="timer" data-from="0" data-to="3417600">3,417,600</span><span class="special">&#43;</span></h1>
                    <p class="muted">Hours of Video Recorded</p>
                    <hr/>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="partners" id="partner-members">
    <div class="container">

        <h1>Meet Our Partners</h1>
        <div class="row">
            <div class="partners-partner">
                <img src="img/partners/abs.png">
            </div>
            <div class="partners-partner">
                <img src="img/partners/amcs.png">
            </div>
            <div class="partners-partner">
                <img src="img/partners/verizon.png">
            </div>
            <div class="partners-partner">
                <img src="img/partners/chbus.png">
            </div>
            <div class="partners-partner">
                <img src="img/partners/landoll.png">
            </div>
        </div>

    </div>
</div>
<!-- CONTACT FORM -->
<section id="contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h1>Contact Us</h1>
                <br>
                <h4 class="text-muted">Send us a message and our senior staff will get back in touch.</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <form name="sentMessage" id="contactForm" novalidate method="POST" action="{{ route('send.mail') }}">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="control-group">
                                <div class="controls">
                                    <p class="help-block text-danger"></p>
                                    <input type="text" class="form-control" placeholder="Name" id="name" name="name" required data-validation-required-message="Please enter your name.">                                    
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
                                    <p class="help-block text-danger"></p>
                                    <input type="email" class="form-control" placeholder="Email" id="email" name="email" required data-validation-required-message="Please enter your email address.">
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
                                    <p class="help-block text-danger"></p>
                                    <input type="text" class="form-control" placeholder="Company" id="company" name="company" required data-validation-required-message="Please enter company name.">
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
                                    <p class="help-block text-danger"></p>
                                    <input type="text" class="form-control" placeholder="Phone" id="phone" name="phone" required data-validation-required-message="Please enter phone number.">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="control-group">
                                <div class="controls">
                                    <p class="help-block text-danger"></p>
                                    <textarea class="form-control" id="message" name="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <div style="text-align: left;">Message</div>
                                </div>
                            </div>
                            <div id="captcha-err" class="help-block text-danger"></div>
                            <div class="g-recaptcha" data-sitekey="6LezNxUTAAAAAKS-BS2J6-KpJUpyzlVPijkIuwA7" data-callback="onSuccess"></div>
                        </div>

                        <div class="clearfix"></div>
                        
                        <div class="col-md-8 text-center send-button">
                            <div id="success"></div>
                            <button type="submit" class="btn btn-xl btn-submit">Send</button>
                        </div>
                        <div class="col-md-3 contact-address">
                            <img src="img/logo.png">
                            <p>4737 Orange Drive<br>Fort Lauderdale 33314</p>
                            <p><a href="mailto:info@eyerideonline.com">info@eyerideonline.com</a></p>
                            <p><a href="tel:8886686698" class="telephone">888 668 6698</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<div id="map-canvas"></div>
@include('partials._live_demo')
<hr>
@stop

@section('scripts')
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script type="text/javascript" src="{{ asset('js/map.js') }}"></script>
<script type="text/javascript" src="http://reactiveraven.github.io/jqBootstrapValidation/js/bootstrap.js"></script>
<script type="text/javascript" src="http://reactiveraven.github.io/jqBootstrapValidation/js/jqBootstrapValidation.js"></script>

<script>
    function onSuccess(response) {
        $('#captcha-err').html('');
    }

    $(function() {
        $("input,textarea,select").jqBootstrapValidation(
            {
                preventSubmit: true,
                submitError: function($form, event, errors) {
                    var googleResponse = $('#g-recaptcha-response').val();
                    if (!googleResponse) {
                        $('#captcha-err').html('<ul role="alert"><li>Please fill up the captcha.</li></ul>');
                    }
                },
                submitSuccess: function($form, event) {
                    var googleResponse = $('#g-recaptcha-response').val();
                    if (!googleResponse) {
                        $('#captcha-err').html('<ul role="alert"><li>Please fill up the captcha.</li></ul>');
                        event.preventDefault();
                    } else {
                        return true;
                    }
                },
                filter: function() {
                    return $(this).is(":visible");
                }
            }
        );

        var hash = location.hash.replace('#', '');

        if (hash != '') {
            $('html, body').animate({ scrollTop: $('#contact').offset().top}, 1000);
        }
    
    });
</script>
@stop