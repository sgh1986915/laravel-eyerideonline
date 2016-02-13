@extends('master')

@section('content')

 <!-- ==== HEADERWRAP ==== -->
 <div id="headerwrap-solutions">
    <header>
      <h1>Benefits</h1>
      <p>Utilize the power of real time fleet management to save <br/> money and save lives.</p>
    </header>
  </div>

  <div class="header-blue">
    <div class="container-fluid">
      <h1>Fleet Tracking &amp; Performance</h1>
    </div>
  </div>

  <div class="sectionOne high-hero">
    <div class="container-fluid">
      <img src="{{ asset('img/benefits/performance.jpg') }}">
      <div class="header-orange">
        <div class="container-fluid">
          <h1>Beyond GPS fleet tracking</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="lower">
    <div class="container">
      <img src="{{ asset('img/benefits/knowledge.png') }}">
      <h1>Knowledge replaces guesswork</h1>
      <p>EyeRide software helps operators make informed decisions, even on the fly. Real-time video and data streaming removes guesswork from the
      equation; operators can instantly view any unit’s GPS location and  current status instantly.<br><br>
      The data collected helps set performance metrics for the future, identify opportunities to improve service and efficiency, and allows you to
      monitor or course-correct your fleet’s successes in real time.</p>
    </div>
  </div>

  <div class="border-divider">
    <div class="container-fluid">
      <!-- Border bottom arrow -->
    </div>
  </div>

  <div class="improve">
    <div class="container">
      <img src="{{ asset('img/benefits/visibility.png') }}">
      <h1>Live visibility, nationwide</h1>
      <p>View every unit in your fleet, nationwide, simultaneously or select an individual vehicle and virtually board it via real-time DVR streaming
      and recordable two-way audio connection.<br><br>
      EyeRide’s software and web-based analytic tools make large-scale strategic planning and addressing minor individual performance issues equally
      simple with instant event notifications and detailed data always just a few clicks away.</p>
    </div>
  </div>

  <div class="prevent">
    <div class="container">
      <img src="{{ asset('img/benefits/streaming.png') }}">
      <h1>Unlimited data streaming</h1>
      <p>All data, including EyeRide’s onboard WiFi hotspot, streams via 3G cellular network with unlimited bandwidth.</p>
    </div>
  </div>

@include('partials._live_demo_alt')
@include('partials._roi', ['class' => 'no-bottom-margine'])
@stop