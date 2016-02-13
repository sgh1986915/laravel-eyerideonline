@extends('master')

@section('content')
<!-- ==== HEADERWRAP ==== -->
<div id="headerwrap-solutions">
    <header>
        <h1>Write your own success story</h1>
        <p>From saving vital seconds in emergency response through preventing parking meter thefts to ensuring safe delivery of exquisite china
        cabinets, be inspired by the success stories of existing EyeRide clients.</p>
    </header>
</div>

<div class="header-blue-company">
    <div class="container-fluid">
        <h1>CWC Transportation Inc., Florida</h1>
    </div>
</div>

<div class="customer-top-section">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cwc-top.jpg') }}">
        <div class="more-info">
            <p>Industry: Hazard Transportation</p>
            <a href="www.cwctransportation.com">www.cwctransportation.com</a>
        </div>
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>CWC Transportation Optimizes Productivity Using EyeRide’s Real-Time Mobile DVR Solution</h1>
        <p>EyeRideTM is an advanced vehicular video surveillance system with integrated satellite navigation, vehicle sensor reporting and a range of
        software tools that convey high-resolution real-time video and two-way audio across digital networks to control centers or anywhere an
        internet connection can be made - even to a cellphone.</p>
    </div>
</div>

<div class="customer-big-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cwc-big.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>A Dollar Saved is a Dollar Earned</h1>
        <p>CWC Transportation, LLC (CWC) is a local common carrier trucking company in the Florida tri-state area specializing in petrolium product
        transportation. CWC prides itself on an unrivaled record of success by providing safe and on time product delivery. CWC ownership firmly
        believes in taking full advantage of newly emerging technology to maintain monitoring of their trucks and drivers.</p>
        <p>CWC understood the necessity and importance of fleet monitoring in order to mitigate liability, loss prevention, and to ensure employee
        accontability. After testing the EyeRideTM system on two trucks, William Masaro, president of CWC made the decision to install the system on
        the entire CWC fleet.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cwc-small-1.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1 class="tagline">Increasing Driver Productivity</h1>
        <h1>Technical Solution</h1>
        <p>Installation of a four camera EyerideTM 400 system - 2 cab-mounted cameras (Interior and exterior) and two trailer-mounted cameras for a
        complete view of the vehicle and its surroundings.</p>
        <p>Installation of a DVR unit in the cab providing the driver with full internet capability, and providing CWC dispatch with real time
        monitoring, 2 way hands free communication, geo-fencing, speed, and idle sensors.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cwc-small-2.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>EyeRide&trade; Installation</h1>
        <p>Installations were done at the company’s locations and overnight to avoid any vehicle down time. Mitech is currently working with CWC to
        install the EyerideTM system on its entire fleet as well as automate billing at the point of delivery via the truck’s wireless router
        system.</p>
    </div>
</div>
@include('partials._results');
@include('partials._live_demo')
<hr>
@stop