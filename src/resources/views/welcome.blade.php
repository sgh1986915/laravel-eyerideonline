@extends('master')

@section('content')

<div class="modal fade" id="video-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/eoHEz3i0vu4" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="video-container">
    <video autoplay="autoplay" loop="loop" id="bgvid">
        <!--<source src="{{ asset('media/video/Eyeride8.mp4') }}" type="video/mp4">-->
        <source src="{{ asset('media/video/MainPageWebsite.webm') }}" type="video/webm">
    </video>

    <div id="headerwrap">
        <header>
            <h1><b>Intelligent, cost-efficient<br>fleet optimization</b></h1>
            <p>The first and only web-based fleet management solution <br>to locate, monitor, and control your fleet <br>in real-time.</p>
            <!--<a href="" class="uppercase-video">Watch the video</a>-->
            <button class="fa fa-play" id="videoModal" data-toggle="modal" data-target="#video-modal"></button>
        </header>
    </div>
</div>

<div class="float-menu">
    <div class=" container-fluid">
        <div class="row">
            <ul class="" role="tablist" id="homepage-tabs">
                <li role="presentation" class="active"><a href="#home-benefits" aria-controls="benefits" role="tab" data-toggle="tab" class="col-lg-5 col-md-5 col-sm-4 left">Benefits</a></li>
                <li role="presentation"><a href="#home-industries" aria-controls="industries" role="tab" data-toggle="tab" class="col-lg-2 col-md-2 col-sm-4 center border">Industries</a></li>
                <li role="presentation"><a href="#home-features" aria-controls="features" role="tab" data-toggle="tab" class="col-lg-5 col-md-5 col-sm-5 right">Features</a></li>
            </ul>
        </div>
    </div>
</div>

<div id="service-box">
    <div class="tab-content">
        <div class="container tab-pane active" role="tabpanel" id="home-benefits">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('benefits.subpage', 'safety') }}">
                    <div class="box driver">
                        <div class="skew">
                            <h3>Driver Behaviour <br>&amp; Fleet Safety</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Employ real-time video and audio to perfect driving habits</li>
                            <li>Intervene immediately when necessary</li>
                            <li>Improve fleet-wide safety by up to 95%</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('benefits.subpage', 'cost') }}">
                    <div class="box fleet">
                        <div class="skew">
                            <h3>Cost Reduction <br>&amp; Fuel Economy</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Receive nationwide second-by-second GPS updates</li>
                            <li>Enjoy unlimited vehicle data streaming</li>
                            <li>Base strategic decisions on comprehensive statistics</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('benefits.subpage', 'performance') }}">
                    <div class="box cost">
                        <div class="skew">
                            <h3>Fleet Tracking <br>&amp; Performance</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Improve driving styles to minimize maintenance costs</li>
                            <li>Maintain vehicle health and prevent accidents</li>
                            <li>Minimize fuel expenses through optimal routing</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('benefits.subpage', 'sustainability') }}">
                    <div class="box sustainabillity">
                        <div class="skew" style="min-height: 53px; margin-top: 5px;">
                            <h3 style="margin: 20px 10px;">Sustainabillity</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Decrease fuel use through better driver behaviour</li>
                            <li>Decrease fuel use through better vehicle health</li>
                            <li>Decrease fuel use through better routing</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('benefits.subpage', 'risk') }}">
                    <div class="box risk">
                        <div class="skew">
                            <h3>Fleet Risk <br>Management</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Improve security and safety through real-time supervision</li>
                            <li>Assist drivers immediately and control vehicles remotely</li>
                            <li>Optimize emergency response through situational awareness</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('benefits.subpage', 'satisfaction') }}">
                    <div class="box customer">
                        <div class="skew">
                            <h3>Customer <br>Satisfaction</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Inspire complete confidence through superior tracking</li>
                            <li>Ensure that drivers always follow company policy</li>
                            <li>Identify opportunities for service improvements</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
            </div>
            <!-- End row -->
        </div>
        <div class="container tab-pane" role="tabpanel" id="home-industries">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link"
                     data-href="{{ route('solutions') }}#tab_industries#public-transportation"
                >
                    <div class="box ind01">
                        <div class="skew">
                            <h3>Public<br>Transportation</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Perfect for buses, taxis, vans, shuttles, trains, boats</li>
                            <li>Route tracking for better time management</li>
                            <li>Crime prevention and delinquent deterrence</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class=" col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_industries#busses-coaches">
                    <div class="box ind02">
                        <div class="skew">
                            <h3>Buses and Motor Coach</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>unlimited wifi for passengers’ entertainment</li>
                            <li>onboard local media server streams latest 20th Century Fox licensed movies and TV shows to passenger’s devices</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_industries#towing">
                    <div class="box ind03">
                        <div class="skew">
                            <h3>Towing</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>recorded footage prevents false claims from being submitted</li>
                            <li>two way audio communication for driver management and direction</li>
                            <li>provide operators with the latest management tools</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_industries#waste-management">
                    <div class="box ind04">
                        <div class="skew">
                            <h3>Waste Management</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>backup camera and monitor support ensures safety for residential neighborhoods</li>
                            <li>printable start and stop reports with map overlay for high precision pick up and route management</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_industries#hazardous-material">
                    <div class="box ind05">
                        <div class="skew">
                            <h3>Hazardous Material/petroleum</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>real time video ensures driver safety and security</li>
                            <li>nationwide connectivity to always track high risk materials</li>
                            <li>Geofencing to receive notifications when truck enters or exits an area</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_industries#cargo-trucks">
                    <div class="box ind06">
                        <div class="skew">
                            <h3>Cargo</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Live and recorded view inside of semi trailer for asset protection</li>
                            <li>Integrated e-log and DVIR mobile app for easy inspection reporting</li>
                            <li>Customers can track deliveries on map with web based interface</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
            </div>
            <!-- End row -->
        </div>
        <div class="container tab-pane" role="tabpanel" id="home-features">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link"
                     data-href="{{ route('solutions') }}#tab_features#unlimited-data"
                >
                    <div class="box feat01">
                        <div class="skew">
                            <h3>Unlimited Data Streaming</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Unlimited access to the EyeNet Nationwide Network</li>
                            <li>Stream EyeRide video for as long as you want with NO additional fees</li>
                            <li>No limits, restrictions or fees on passenger's WiFi usage</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class=" col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_features#live-fleet">
                    <div class="box feat02">
                        <div class="skew">
                            <h3>Live Fleet GPS Tracking</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Real time up to the second GPS updates</li>
                            <li>Automatic offsite backup of GPS, speed, and start/stop history</li>
                            <li>Track entire fleet on one easy to view screen</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_features#real-time-video">
                    <div class="box feat03">
                        <div class="skew">
                            <h3>Real Time Video Recording</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Up to 8 channels of live streaming video to pc or mobile device</li>
                            <li>Customized cameras to mount where you need them</li>
                            <li>Remotely accessible stored footage; no removable drives</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_features#real-time-email">
                    <div class="box feat04">
                        <div class="skew">
                            <h3>Real Time Email and SMS Alerts</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>instant notification for sensors to email or mobile device</li>
                            <li>built in speed limit, idle monitoring, geofencing and ignition sensors</li>
                            <li>compatible with wide range of optional external sensors</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_features#vehicle-stop">
                    <div class="box feat05">
                        <div class="skew">
                            <h3>Vehicle Start and Stop Reports</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Detailed downloadable GPS, speed and state line reports</li>
                            <li>All reports and gps history available even when vehicle is offline</li>
                            <li>Automatic data upload and stored indefinitely on server</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-link" data-href="{{ route('solutions') }}#tab_features#e-log">
                    <div class="box feat06">
                        <div class="skew">
                            <h3>E-Log Electronic Logbook App</h3>
                        </div>
                        <!-- End .skew -->
                        <ul>
                            <li>Easy to create DVIR inspection reports</li>
                            <li>Editable logbook makes driver log auditing and archiving simple</li>
                            <li>Effortlessly upload and print driver logs and pictures</li>
                        </ul>
                    </div>
                    <!-- End .box -->
                </div>
                <!-- col-sm-4 -->
            </div>
        </div>
    </div>
    <!-- End .container -->
</div>
<!-- End #service-box -->
<!-- ==== ABOUT ==== -->
<div id="about" name="about">
    <div class="container">
        <h1 class="centered">Companies we work with</h1>
        <div class="row">
            <div class="companies-partners">
                <img src="img/about/aksteel.png">
            </div>
            <div class="companies-partners">
                <img src="img/about/statefarm.png">
            </div>
            <div class="companies-partners">
                <img src="img/about/ucg.png">
            </div>
            <div class="companies-partners">
                <img src="img/about/cwc.png">
            </div>
        </div>
        <!-- row -->
    </div>
    <!-- container -->
</div>
<!-- about -->
<!-- PROPRIATERY SECTION -->
<div id="proprietary" name="proprietary">
    <div class="container">
        <h1 class="centered">Our Proprietary EyeRide Web App</h1>
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="thumbnail_container">
                    <div class="thumbnail">
                        <img src="img/propriatary/gps-1.png">
                        <label>Live Fleet GPS <br/>Tracking</label>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="thumbnail_container">
                    <div class="thumbnail">
                        <img src="img/propriatary/realtime-1.png">
                        <label>Real-time Video</label>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="thumbnail_container">
                    <div class="thumbnail">
                        <img src="img/propriatary/geo-1.png">
                        <label>Geo-Fencing <br/>and Geo-Location</label>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="thumbnail_container">
                    <div class="thumbnail">
                        <img src="img/propriatary/2way-1.png">
                        <label>2-Way Audio <br/>Communication</label>
                    </div>
                </div>
            </div>
        </div>
        <!-- row -->
        <div class="row">
            <div class="container">
                <div class="col-md-3 col-md-offset-3 col-sm-6 col-xs-6">
                    <div class="thumbnail_container">
                        <div class="thumbnail">
                            <img src="img/propriatary/alarms-1.png">
                            <label>In-Vehicle Alarms <br/>and Sensors</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="thumbnail_container">
                        <div class="thumbnail">
                            <img src="img/propriatary/email-1.png">
                            <label>Real-time Email <br/>and SMS Alerts</label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /container -->
        </div>
        <!-- /rov -->
    </div>
    <!-- /container -->
</div>
<!-- /#propriatery -->
<!-- ==== WEBAPP SECTION ==== -->
<div class="webapp container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <div class="webapp-img">
                <img src="img/propriatary/webapp.jpg">
            </div>
        </div>
        <!-- /container -->
    </div>
    <!-- /rov -->
</div>
<!-- /.webapp -->
<!-- CUSTOMER CASE STUDIES SECTION  / SLICK SLIDER-->
<div id="customerCs" name="CustomerCaseStudies">
    <div class="container">
        <h1 class="centered">Customer Case Studies</h1>
        <div class="row">
            <div class="col-md-12">
                <div class="slider">
                    <div>
                        <div class="col-sm-4 content-left">
                            <img src="img/customers/customer-logo-1.png">
                        </div>
                        <div class="col-sm-8 content-right">
                            <h1>AK Steel</h1>
                            <p>“Building on a heritage spanning over 100 years, AK Steel take great pride in
                            prioritising employee safety. This is more than a business objective; it’s an
                            operational culture. And it shows in AK Steel’s safety record, which outperforms the
                            steel industry average by a wide margin. However, the implementation of cutting-edge
                            technology has seen an increased rate of production, and with day-to-day
                            operations including factory employees working in close proximity to moving trains,
                            AK Steel wanted to do everything possible to ensure the safety of its personnel. All
                            sides of the trains would have to be covered by video monitoring...”<br>
                            <a href="{{ route('customer.show', 'aksteel') }}">Read more</a></p>
                        </div>
                    </div>
                    <div>
                        <div class="col-sm-4 content-left">
                            <img src="img/customers/customer-logo-6.png">
                        </div>
                        <div class="col-sm-8 content-right">
                            <h1>City Furniture</h1>
                            <p>“In spite of repeatedly being reminded of the strict company policy, many drivers did not wear their seatbelts, and there
                            was growing concern about the safety issue of mobile use whilst driving. The incidence of damaged cargo and the number of
                            ensuing warranty claims were also relatively high, compromising customer satisfaction and incurring a range of associated costs.”<br><a href="{{ route('customer.show', 'cityfurniture') }}">Read more</a></p>
                        </div>
                    </div>
                    <div>
                        <div class="col-sm-4 content-left">
                            <img src="img/customers/customer-logo-4.png">
                        </div>
                        <div class="col-sm-8 content-right">
                            <h1>CWC Transportation Inc., Florida</h1>
                            <p>“CWC Transportation, LLC (CWC) is a local common carrier trucking company in the Florida tri-state area specializing in 
                            petrolium product transportation. CWC prides itself on an unrivaled record of success by providing safe and on time product 
                            delivery. CWC ownership firmly believes in taking full advantage of newly emerging technology to maintain monitoring of their trucks and drivers.”<br>
                            <a href="{{ route('customer.show', 'cwc') }}">Read more</a></p>
                        </div>
                    </div>
                    <div>
                        <div class="col-sm-4 content-left">
                            <img src="img/customers/customer-logo-3.png">
                        </div>
                        <div class="col-sm-8 content-right">
                            <h1>Louisiana Motor Coach</h1>
                            <p>“Louisiana Motor Coach build their business on the four pillars of safety, sustainability, technology and an inclusive, 
                            family-oriented attitude to clients. Considering the ever-worsening traffic and increased client demands on safety, punctuality 
                            and onboard-entertainment, they needed an all-in-one solution that would safeguard their market leadership for years to come. 
                            Drivers would have to be equipped to deal with any eventuality on short notice, and communications with head office would have 
                            to be seamless and immediate to optimize proactivity and shorten response times.”<br>
                            <a href="{{ route('customer.show', 'louisiana') }}">Read more</a></p>
                        </div>
                    </div>
                    <div>
                        <div class="col-sm-4 content-left">
                            <img src="img/customers/customer-logo-5.png">
                        </div>
                        <div class="col-sm-8 content-right">
                            <h1>SP Plus</h1>
                            <p>“Whereas the highly trained specialists at the Command Center were used to employing the latest audio and video technology 
                            to supervise and remotely operate client parking facilities, they did not enjoy the same degree of control in the company’s own 
                            mobile operations. Insufficient supervision opened for staff theft from parking meters, and incorrect reporting was rife. On 
                            particularly hot days, some drivers wouldn’t get out of their vehicles to check the meters; routes were occasionally marked as 
                            cleared when they in fact hadn’t been covered at all; and there was a problem with drivers not answering their phones as they 
                            should.”<br>
                            <a href="{{ route('customer.show', 'spplus') }}">Read more</a></p>
                        </div>
                    </div>
                    <div>
                        <div class="col-sm-4 content-left">
                            <img src="img/customers/customer-logo-2.png">
                        </div>
                        <div class="col-sm-8 content-right">
                            <h1>State Farm State Patrol: Ohio</h1>
                            <p>“The State of Ohio and State Farm use the revolutionary EyeRideTM Real-Time Mobile DVR solution in their entire Ohio State 
                            Farm safety patrol vehicle fleet; which provides real-time updates throughout the harsh northing weather and driving conditions 
                            to ensure the utmost safety for both the State Farm drivers and daily commuters using the road.”<br>
                            <a href="{{ route('customer.show', 'statefarm') }}">Read more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="partners">
    <h1 class="centered">Our Partners</h1>
    <div class="container">
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
<div id="request">
    <div class="container">
        <div class="row">

            <div class="img"><img src="img/secondslider/img1.jpg" class="img-responsive"></div>
            <div class="img"><img src="img/secondslider/img2.jpg" class="img-responsive"></div>


            <div class="img img-center">
                <div class="header">
                    <img src="img/secondslider/logo-white.png" />
                </div>
                <div>
                    <h5>All-In-One Fleet Management Solution</h5>
                </div>
                <div>
                    <h4>Locate. Monitor. Control.</h4>
                </div>
                <a href="{{ route('company') }}#contact" class="btn btn-request btn-responsive">Request a quote</a>
            </div>

            <div class="img"><img src="img/secondslider/img3.jpg" class="img-responsive"></div>
            <div class="img"><img src="img/secondslider/img4.jpg" class="img-responsive"></div>

        </div>
    </div>
</div>
 <!--    </div>
</div> -->

@stop

@section('scripts')
<script>

    $(function() {

        $('#videoModal').on('click', function(event) {
            $('#bgvid').trigger('pause');
        });

        $('#video-modal').on('hidden.bs.modal', function (e) {
            $('#bgvid').trigger('play');
        })
    
    });

</script>
@stop