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
      <h1>Customer Satisfaction</h1>
    </div>
  </div>

  <div class="sectionOne">
    <div class="container-fluid">
      <img src="{{ asset('img/benefits/satisfaction.jpg') }}">
      <div class="header-orange">
        <div class="container-fluid">
          <h1>Make people happy. Ensure quality service, consistent fleet-wide</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="prevent">
    <div class="container">
      <img src="{{ asset('img/benefits/feedback.png') }}">
      <h1>Real feedback, as it happens</h1>
      <p>Your company sets policies to assure customers of quality, professional service with every interaction. EyeRide helps operators answer three
      important questions about those policies by providing direct, real-time insight into everyday operations.<br><br>
      Do all your drivers uphold your standards?<br><br>
      How could policy adjustments improve your customers’ experience moving forward?<br><br>
      What areas need attention to help your employees perform at their peak?</p>
    </div>
  </div>

@include('partials._live_demo_alt')
@include('partials._roi', ['class' => 'no-bottom-margine'])
@stop