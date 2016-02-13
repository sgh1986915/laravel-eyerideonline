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
        <h1>City Furniture</h1>
    </div>
</div>

<div class="customer-top-section">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cityfurniture-top.jpg') }}">
        <div class="more-info">
            <p>Industry: Delivery Trucks</p>
            <a href="www.cityfurniture.com">www.cityfurniture.com</a>
        </div>
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Client</h1>
        <p>Headquartered in Tamarac, Florida, and with 15 retail outlets throughout the state, City Furniture operate a fleet of over 100 vehicles
        making hundreds of thousands of deliveries every year. Shipped goods include everything from leather sofas and china cabinets to nightstands
        and mirrors, putting very high demands on driver behavior as well as on packing, unpacking and final delivery to the company’s discerning
        customers.</p>
    </div>
</div>

<div class="customer-big-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cityfurniture-big.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Challenge</h1>
        <p>In spite of repeatedly being reminded of the strict company policy, many drivers did not wear their seatbelts, and there was growing
        concern about the safety issue of mobile use whilst driving. The incidence of damaged cargo and the number of ensuing warranty claims were
        also relatively high, compromising customer satisfaction and incurring a range of associated costs.</p>
        <p>City Furniture needed a system to optimize driver behavior as well as ensure careful packing, unpacking and delivery, improving customer
        satisfaction whilst providing admissible evidence to deter thefts, refute legal claims and lower insurance costs.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cityfurniture-small-1.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Solution</h1>
        <p>Having reviewed a number of different solutions, City Furniture chose the EyeRide 800 system with a six-camera setup. This not only
        features a 360º view around each vehicle, but also views of the driver, passenger and trailer interiors. With added benefits such as infrared
        night vision; live streaming and archiving of high-resolution video; two-way audio; G-force sensors and integrated GPS reporting, the system
        provides control center operators with unprecedented ability to immediately correct driver behavior and relay gathered fleet data to
        management for global policy and strategic business decisions. Since the system is built around tamper- and waterproof, military-grade
        hardware that produces admissible evidence around the clock, it also boosts security right across the board.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cityfurniture-small-2.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Implementation</h1>
        <p>EyeRide’s team of certified installers and instructors fitted the equipment and trained the entire fleet workforce within two months,
        resulting in extremely rapid return on investment. Productivity went up and safety issues down; City Furniture estimated savings of $X within
        X.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/cityfurniture-small-3.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Verdict</h1>
        <p>Says Mr Jon Greenberg, Director of Operations at City Furniture: &quot;EyeRide give us insights into what actually happens in the field that you won’t get even when riding along with a driver. A major advantage is that, since you’re like a fly on the wall, you are able to micromanage without disrupting the day-to-day operations. Drivers know that you can see and hear everything, but they’re not bothered by your presence and they obviously accept being reprimanded when they’re aware that everything is caught on tape. Giving someone directions is as easy as pushing a button. And then there’s the holistic view that you get when every vehicle in the fleet feeds this wealth of data to you in real-time; it provides you with a depth of understanding that is simply unbeatable. Being closely familiar with the driver’s reality enables you to make decisions that not only sound good in the boardroom but actually work in practice, too.&quot;</p>
    </div>
</div>
@include('partials._results');
@include('partials._live_demo')
<hr>
@stop