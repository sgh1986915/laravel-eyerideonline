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
        <h1>Louisiana Motor Coach</h1>
    </div>
</div>

<div class="customer-top-section">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/louisiana-top.jpg') }}">
        <div class="more-info">
            <p>Industry: Public Transport</p>
            <a href="www.louisianamotorcoach.com">www.louisianamotorcoach.com</a>
        </div>
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Client</h1>
        <p>Family-owned and –operated Louisiana Motor Coach is the leading motor coach transportation company in the state of Louisiana. They have
        been in the business for over 25 years, building a solid reputation for providing safe, reliable service to a host of different clients. With
        a fleet of X large and medium-sized coaches as well as X mini buses, they cover everything from weddings, road tours and sporting events to
        convention, airport and cruise ship transfers, and anything in between.</p>
    </div>
</div>

<div class="customer-big-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/louisiana-big.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Challenge</h1>
        <p>Louisiana Motor Coach build their business on the four pillars of safety, sustainability, technology and an inclusive, family-oriented
        attitude to clients. Considering the ever-worsening traffic and increased client demands on safety, punctuality and onboard-entertainment,
        they needed an all-in-one solution that would safeguard their market leadership for years to come. Drivers would have to be equipped to deal
        with any eventuality on short notice, and communications with head office would have to be seamless and immediate to optimize proactivity and
        shorten response times. Liability reduction was another priority, with securely gathered and stored admissible evidence being high on the wish
        list, and a top-of-the-line entertainment package was added for good measure.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/louisiana-small-1.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Solution</h1>
        <p>Louisiana Motor Coach not only found their solution in EyeRide, but also sparked the development of an entirely new service. The EyeRide
        800 system coupled to an eight-camera setup delivers comprehensive communications and supervisory capabilities right across their fleet: a
        super-wide-angle FD100 covers four traffic lanes ahead; and seven military-grade, tamper-proof infrared SV88 offer 360° views both in- and
        outside of other vehicle sections. Remote support staff can identify any incident immediately and notify drivers through the two-way, push-to-
        talk communications system. There’s no buffering of the real-time audio and video feeds, and all captured data is securely archived in high
        resolution for convenient future reference.</p>
        <p>Louisiana Motor Coach didn’t stop at optimizing safety and communications, however. Staying true to their brand promise to offer state-of-
        the-art passenger conveniences and entertainment, they wanted to push the envelope further. With EyeRide’s R&D team working closely together
        with company management, Fox Movies was invited to collaborate on a revolutionizing onboard media-streaming service, which is due to be
        launched shortly. This adds to the already existing WiFi capability and onboard diagnostics connectivity to further strengthen Louisiana Motor
        Coach’s position as leader in their market.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/louisiana-small-2.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Implementation</h1>
        <p>EyeRide’s certified installers and instructors had all hardware fitted and staff fully trained within X weeks. With passengers already
        surfing the Internet freely through the onboard WiFi, the Fox Movies entertainment service is due to set another industry benchmark
        soon.</p>
    </div>
</div>

<div class="customer-small-image">
    <div class="container-fluid">
        <img src="{{ asset('img/customer/louisiana-small-3.jpg') }}" alt="">
    </div>
</div>

<div class="white-section">
    <div class="container">
        <h1>The Verdict</h1>
        <p>Mary Sanders, President and Owner at Louisiana Motor Coach: &quot;You know, it might seem that taking people from A to B isn’t rocket science,
        but making sure that they are picked up and dropped off on time and can make the most of the trip kind of is. Weddings, major sporting events
        and sightseeing tours are just some examples where having access to the latest technology often is the deciding factor. No matter whether
        it’s due to traffic jams, passenger mishaps or anything else that can happen on the road (and I could tell you a few good stories on that),
        you can’t afford to be the party that stalled the walk down the aisle or made people miss the kick-off. And with EyeRide, we’re truly
        equipped to stay as far ahead of the game as you possibly can. In fact, I can check the position and live audio and video feeds of every
        single vehicle in the fleet right here on my smartphone, and should I need to tell a particular driver anything, I just push a button. With
        second-by-second GPS updates, we know exactly where everyone is at any given moment, so whenever a client asks for a status update, we can
        give them a straight answer. Details like that make for absolutely invaluable reassurance – both for our management and drivers as well as
        our clients and their guests.&quot;</p>
    </div>
</div>
@include('partials._results');
@include('partials._live_demo')
<hr>
@stop