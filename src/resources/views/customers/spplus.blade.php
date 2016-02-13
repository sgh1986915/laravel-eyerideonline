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
        <h1>SP Plus</h1>
    </div>
</div>

<div class="customer-top-section">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/spplus-top.jpg') }}">
        <div class="more-info">
            <p>Industry: Public Transport</p>
            <a href="www.spplus.com">www.spplus.com</a>
        </div>
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Client</h1>
        <p>With over 23,000 employees, SP+ is North America’s foremost provider of parking management services. The company operates thousands of
        facilities in hundreds of cities across the United States and Canada. A total of more than two million parking spaces are supervised and
        remotely controlled from the state-of-the-art SP+ Command Center, headquartered in Austin, Texas. Drawing on over 36 years’ experience in the
        hospitality industry, this is a company well placed to identify strengths and weaknesses in operational systems.</p>
    </div>
</div>

<div class="customer-big-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/spplus-big.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Challenge</h1>
        <p>Whereas the highly trained specialists at the Command Center were used to employing the latest audio and video technology to supervise and
        remotely operate client parking facilities, they did not enjoy the same degree of control in the company’s own mobile operations.
        Insufficient supervision opened for staff theft from parking meters, and incorrect reporting was rife. On particularly hot days, some drivers
        wouldn’t get out of their vehicles to check the meters; routes were occasionally marked as cleared when they in fact hadn’t been covered at
        all; and there was a problem with drivers not answering their phones as they should.</p>
        <p>SP+ needed to find a mobile solution on a par with the advanced stationary systems they employed to control client parking facilities. To
        maintain quality control and security across all services, this would have to include live audio and video in addition to GPS capabilities,
        two-way communication and on-board WiFi.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/spplus-small-1.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Solution</h1>
        <p>Comparing new mobile solutions against the tried-and-tested stationary technology they were used to, SP+ Command Center specialists spent
        a long time rejecting systems until they found EyeRide. The team tried EyeRide on only two vehicles before they had seen enough; the data
        feed and quality of this system not only matched but in many regards surpassed their existing stationary solutions.</p>
        <p>SP+ selected the EyeRide 400 with a four-camera setup: the dual-view DC200, multi-purpose SV88 and wide-angle, reverse-view RV218. This
        meant that drivers could now be supervised in every aspect of their duties. SV88 covers meter collections curbside. DC200 shows traffic ahead
        as well as views of both driver and any passenger. RV218 controls rear access to the vehicles and boosts safety on reversing. Instant two-way
        communication ensures that drivers always are accessible. Night-vision IR optics, live streaming and archiving of high-resolution videos,
        WiFi and a host of additional benefits complete the picture, and it’s all built around tamper- and waterproof, military-grade hardware.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/spplus-small-2.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Implementation</h1>
        <p>EyeRide was installed across a fleet of X vehicles within X weeks. With drivers and Command Center specialists trained as part of the
        process, the solution was operational from day one. Theft went down to zero and the rate of collection increased dramatically; SP+ enjoyed an
        immediate saving of X per vehicle.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/spplus-small-3.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Verdict</h1>
        <p>Keith B. Evans, Executive Vice President, Operations Support and Technology, describes EyeRide in no uncertain terms: &quot;At SP+, we
        pride ourselves on our market-based expertise, so the fact that we apparently didn’t know some of our own drivers as well as we thought was
        quite frustrating. Especially considering that we are at the technological forefront of remote supervision and control at our many thousands
        of client facilities. So, we wanted something that could match that capability in the mobile operations, but, to be honest, we weren’t sure
        the technology existed just yet. Luckily, EyeRide turned out to be everything we wanted – and more. The flow-on benefits of features such as
        second-by-second GPS updates have enabled us to streamline operations in ways we hadn’t even thought of before. With ‘Innovation in
        Operation’ being one of the main tenets at SP+, EyeRide really is right up our alley.&quot;</p>
    </div>
</div>
@include('partials._results');
@include('partials._live_demo')
<hr>
@stop