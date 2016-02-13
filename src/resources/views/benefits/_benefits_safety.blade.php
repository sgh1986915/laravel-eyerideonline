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
      <h1>Driver Behavior and Fleet Safety</h1>
    </div>
  </div>

  <div class="sectionOne">
    <div class="container-fluid">
      <img src="{{ asset('img/benefits/safety.jpg') }}">
      <div class="header-orange">
        <div class="container-fluid">
          <h1>Reduce fleet operation costs</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="lower">
    <div class="container">
      <img src="{{ asset('img/benefits/empowered.jpg') }}">
      <h1>Empowered drivers operate safer fleets</h1>
      <p>Give your drivers the tools they need to enhance your passengers’ safety. EyeRide DVR systems include  a range of event and force sensors
      that relay information to unit and base in real time; notifying both instantly if a safety, speed, route, or other parameter is exceeded.<br><br>
      This encourages self-correction by helping drivers identify habits to change or reinforce, and helps fleet operators take informed action to
      remedy any problematic trends.</p>
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
      <h1>Monitored Vehicles Save Lives</h1>
      <p>Protect your passengers – and your business – by ensuring drivers uphold company safety standards at every turn. Internal and external DVR
      combines with vehicle performance monitors and other sensors to provide a clear, big-picture perspective of what’s happening to, in, and around
      your units at any given time.<br><br>
      Seeing and hearing your drivers in real time enables faster emergency responses and pre-emptive correction of potentially dangerous behaviors or
      routes to reduce the frequency and severity of collisions and other incidents.<br><br>
      EyeRide automatically records hard evidence of all events leading up to any incident; meticulous and accurate documentation that reduces
      unknowns and can prevent litigation altogether.</p>
    </div>
  </div>

@include('partials._live_demo_alt')
@include('partials._roi', ['class' => 'no-bottom-margine'])
@stop