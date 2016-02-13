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
      <h1>Risk Management</h1>
    </div>
  </div>

  <div class="sectionOne high-hero">
    <div class="container-fluid">
      <img src="{{ asset('img/benefits/risk.jpg') }}">
      <div class="header-orange">
        <div class="container-fluid">
          <h1>Actively minimize risk</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="lower">
    <div class="container">
      <img src="{{ asset('img/benefits/enhance.png') }}">
      <h1>Enhance vehicle security</h1>
      <p>Video monitoring can reduce crime rates and virtually eliminate employee and third-party theft.<br><br>
      EyeRide provides a constant connection between units and base via unlimited real-time video streaming and two-way audio link. The system
      collects and delivers data for up to 24 hours after a vehicle is turned off; video feed, alerts, and other functions can be triggered by motion
      detectors.<br><br>
      Operators can even trigger vehicle functions, such as door locks or ignition, remotely.<br><br>
      This is both reliable overnight security and an easy way for authorities to recover stolen vehicles. EyeRide systems can be equipped with
      multiple alarms and are very difficult for would-be thieves to remove.</p>
    </div>
  </div>

  <div class="border-divider">
    <div class="container-fluid">
      <!-- Border bottom arrow -->
    </div>
  </div>

  <div class="improve">
    <div class="container">
      <img src="{{ asset('img/benefits/monitored.png') }}">
      <h1>Reduce driver error</h1>
      <p>Drivers are humans. Even with the best training program they become comfortable, developing minor habits and patterns that contribute greatly
      to infraction and collision rates.<br><br>
      EyeRide enables fleet managers to address issues as they occur, in real time, by notifying and communicating directly with drivers. This way,
      drivers quickly learn to self-correct their habitual mistakes and you can identify your riskiest routes and individuals.<br><br>
      This ensures safety gets prioritized across the board and potential concerns can be targeted for immediate action to reduce the risk of
      accidents.</p>
    </div>
  </div>

  <div class="prevent">
    <div class="container">
      <img src="{{ asset('img/benefits/harden.png') }}">
      <h1>Harden your company against claims</h1>
      <p>EyeRide protects your drivers, customers, and company by logging a thorough, accurate record of every event leading up to any dispute,
      infraction, or collision; video and sensor evidence that helps quickly confirm or deny liability and provides strong protection against
      groundless or fraudulent claims.</p>
    </div>
  </div>

@include('partials._live_demo_alt')
@include('partials._roi', ['class' => 'no-bottom-margine'])
@stop