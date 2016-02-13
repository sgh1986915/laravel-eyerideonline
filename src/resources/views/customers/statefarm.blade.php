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
        <h1>State Farm State Patrol: Ohio</h1>
    </div>
</div>

<div class="customer-top-section">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/statefarm-top.jpg') }}">
        <div class="more-info">
            <p>Industry: Emergency Transportation</p>
            <a href="www.assistpatrol.com">www.assistpatrol.com</a>
        </div>
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>Keeping Ohio’s Road Safe</h1>
        <p>The State of Ohio and State Farm use the revolutionary EyeRideTM Real-Time Mobile DVR solution in their entire Ohio State Farm safety
        patrol vehicle fleet; which provides real-time updates throughout the harsh northing weather and driving conditions to ensure the utmost
        safety for both the State Farm drivers and daily commuters using the road.</p>
        <p>The State of Ohio and State Farm use the EyeRide Mobile DVR solution in their entire Ohio State Farm safety patrol vehicle fleet; which
        provides real-time updates and two way communication with their drivers, maximizing the amount of daily service calls completed.</p>
    </div>
</div>

<div class="customer-big-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/statefarm-big.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Solution</h1>
        <p>For this project, the State Farm Safety Patrol installed the EyeRideTM 200 system that includes one interior front facing and one exterior
        rear facing camera on each vehicle allowing the Safety Patrol Control Center to efficiently monitor the safety of their drivers in Ohio’s
        harsh weather conditions.</p>
        <p>Now that every emergency and service call is safely monitored from a single control center, more efficient routes can be planned and
        incidents can be cleared both, safely and within a timely manner.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/statefarm-small-1.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Implementation</h1>
        <p>The EyeRideTM Mobile DVR solution comes complete with step-by-step instructions for a quick an easy installation. Coupled with EyeRide’s
        superb customer support, an entire fleet can be equipped with the EyeRideTM Real-Time Mobile DVR system overnight.</p>
    </div>
</div>
@include('partials._results');
@include('partials._live_demo')
<hr>
@stop