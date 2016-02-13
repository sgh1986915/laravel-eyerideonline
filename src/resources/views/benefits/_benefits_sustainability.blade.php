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
      <h1>Sustainability</h1>
    </div>
  </div>

  <div class="sectionOne high-hero">
    <div class="container-fluid">
      <img src="{{ asset('img/benefits/sustainability.jpg') }}">
      <div class="header-orange">
        <div class="container-fluid">
          <h1>Earth-friendly</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="lower">
    <div class="container">
      <img src="{{ asset('img/benefits/healthier.png') }}">
      <h1>Healthier vehicles use less fuel</h1>
      <p>Real-time monitoring of vehicle health, and operating conditions, and events helps maintenance crews shift out of reactive mode to focus on
      prevention and efficiency.<br><br>
      This helps keep units at peak performance, consuming less fuel per mile travelled.</p>
    </div>
  </div>

  <div class="border-divider">
    <div class="container-fluid">
      <!-- Border bottom arrow -->
    </div>
  </div>

  <div class="improve">
    <div class="container">
      <img src="{{ asset('img/benefits/sodo.png') }}">
      <h1>So do safer drivers</h1>
      <p>Driving habits have a major impact on fuel efficiency and vehicle wear. EyeRide notifies drivers of harmful or wasteful behaviours like harsh
      turns or excessive speeds to encourage self-correction and mindfulness.<br><br>
      Operators also receive instant notifications when any driver exceeds established parameters, all events get recorded for analysis and action.
      EyeRide provides both motivation and tool to reduce fuel consumption by improving drivers’ habits.</p>
    </div>
  </div>

  <div class="prevent">
    <div class="container">
      <img src="{{ asset('img/benefits/optimized.png') }}">
      <h1>And optimized service routes</h1>
      <p>Identifying efficient routes that provide total coverage with fewer miles travelled allows faster, better-targeted response to incidents,
      emerging trends and patterns.<br><br>
      Earth-friendly fleets reduce their emissions by minimizing waste and focusing on efficiency from the individual driver to the organization as a
      whole. EyeRide provides both historical data analysis and real-time monitoring capabilities at a glance to help operators choose which resources
      to deploy and how to do so most effectively.</p>
    </div>
  </div>

@include('partials._live_demo_alt')
@include('partials._roi', ['class' => 'no-bottom-margine'])
@stop