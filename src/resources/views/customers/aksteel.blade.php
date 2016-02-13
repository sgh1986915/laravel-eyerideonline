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
        <h1>AK Steel</h1>
    </div>
</div>

<div class="customer-top-section">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/aksteel-top.jpg') }}">
        <div class="more-info">
            <p>Industry: Cargo Transport</p>
            <a href="www.aksteel.com">www.aksteel.com</a>
        </div>
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Client</h1>
        <p>AK Steel is a world leader in the production of flat-rolled carbon and electrical and stainless steel products. Located across six states,
        the company’s eight steel plants, two tube-manufacturing plants and two coke plants employ nearly 10,000 workers. Operations rely on a mixed
        fleet of some [number of trains] heavy trains for safe and timely transportation of raw and refined material as well
        as equipment and people.</p>
    </div>
</div>

<div class="customer-big-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/aksteel-big.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Challenge</h1>
        <p>Building on a heritage spanning over 100 years, AK Steel take great pride in
        prioritising employee safety. This is more than a business objective; it’s an
        operational culture. And it shows in AK Steel’s safety record, which outperforms the
        steel industry average by a wide margin. However, the implementation of cutting-edge
        technology has seen an increased rate of production, and with day-to-day
        operations including factory employees working in close proximity to moving trains,
        AK Steel wanted to do everything possible to ensure the safety of its personnel. All
        sides of the trains would have to be covered by video monitoring, and all captured
        footage would have to be saved in high resolution for convenient policy adherence
        assurance and liability reduction. This naturally also asked that the equipment would
        be able to withstand the punishing environment of the often extremely hot factories as
        well as the intense vibrations of train sets weighing up to X.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/aksteel-small-1.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Solution</h1>
        <p>Having searched high and low for a system that could meet their strict hardware
        durability and video quality standards, AK Steel found the perfect fit in the military-grade
        EyeRide 800. They chose to marry it with a water- and vandal-proof camera
        setup: two RV218 cameras cover front and rear vehicle events, offering wide-angle
        views and extreme IR vision even in very dimly lit conditions; two rigid multi-purpose
        SV88 cameras provide long-range coverage of the sides of the trains. With no
        buffering of the real-time video feed, AK Steel are now able to immediately detect
        safety hazards and stop trains in their tracks at the push of a button.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/aksteel-small-2.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Implementation</h1>
        <p>With employee safety being their top priority, AK Steel wanted the system up and running as soon as humanly possible. EyeRide’s team of 
        certified installers and instructors responded swiftly. The entire fleet of X trains was fitted with EyeRide equipment, and all relevant 
        personnel trained, within X weeks.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/aksteel-small-3.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Verdict</h1>
        <p>&quot;We certainly had the capability to meet urgent client needs, such as when Toyota requires quick delivery of steel for a
        vehicle launch, but increased factory productivity easily brings increased safety risks”, explains Lonnie Potter, supervisor of operations, “and building on our
        reputation as a standout employer of choice, we didn’t want to compromise employee safety to meet client demand. Once we had realised the
        potential of live video, we found ourselves in a race to secure and install the ultimate solution ASAP.  Luckily, the choice turned out to be
        quite simple in the end. EyeRide’s military-grade system is on a par with the tough-as-nails equipment factory workers are used to dealing
        with, and the video functionality, archiving and unlimited data plans are just what we were looking for. We got EyeRide installed in next to
        no time, and we haven’t looked back since. Or, rather, we HAVE been looking both back and forward and to the sides”, adds Lonnie
        with a smile. “Thanks to EyeRide, our remote control operators can now supervise all angles of the trains. For busy factory floor workers and
        vehicle drivers, that can make for all the difference – in the most definitive sense of the expression.&quot;</p>
    </div>
</div>
@include('partials._results');
@include('partials._live_demo')
<hr>
@stop