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
      <h1>Cost Reduction and Fuel Economy</h1>
    </div>
  </div>

  <div class="sectionOne high-hero">
    <div class="container-fluid">
      <img src="{{ asset('img/benefits/cost.jpg') }}">
      <div class="header-orange">
        <div class="container-fluid">
          <h1>Reduce fleet operation costs</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="lower">
    <div class="container">
      <img src="{{ asset('img/benefits/tank.jpg') }}">
      <h1>Lower fuel consumption</h1>
      <p>Increase efficiency by creating smarter routes and identifying fuel-wasting habits like excessive idling or speed.<br>EyeRide encourages drivers to develop more efficient driving techniques and helps fleet operators streamline routes for lower total mileage and more efficient unit allocation.<br><br>
      Fuel can be heavy expense; EyeRide shows you how it's consumed.Minimize waste and ensure drivers comply<br>with company fuel policies using real-world data as instant feedback.</p>
    </div>
  </div>

  <div class="border-divider">
    <div class="container-fluid">
      <!-- Border bottom arrow -->
    </div>
  </div>

  <div class="improve">
    <div class="container">
      <img src="{{ asset('img/benefits/car.jpg') }}">
      <h1>Improve vehicle performance</h1>
      <p>Even small improvements to driving behaviors can dramatically reduce fleet maintanance costs.<br>
      EyeRide-equipped units know how they're being handled; if movement,events,or forces<br>beyond established parameters occur, the driver receives an immediate prompt to correct<br>harsh driving behaviours that cause unnecessary damage to vehicles.<br><br>
      EyeRide-assisted drivers improve vehicles performance and lifespan by reducing everyday wear.</p>
    </div>
  </div>

  <div class="prevent">
    <div class="container">
      <img src="{{ asset('img/benefits/preventacc.jpg') }}">
      <h1>Prevent Accidents</h1>
      <p>Reduce the frequency severity of collisions by actively ancouraging drivers to develop safer behavior that<br>preserves their vehicles integrity. Even when accidents do happen, stable vehicles allow faster responses that<br> can limit damage and liabillity - and even avoid a collision altogether.<br><br>
      EyeRide monitoring systems reduce accident-related costs because improved driving and better-performing<br>vehicles mean fewer mistakes occur. </p>
    </div>
  </div>

@include('partials._live_demo_alt')
@include('partials._roi', ['class' => 'no-bottom-margine'])
@stop