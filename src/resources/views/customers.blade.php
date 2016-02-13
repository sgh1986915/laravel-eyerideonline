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
        <h1>Featured Case Studies</h1>
    </div>
</div>
<div id="customers">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
                <a href="{{ route('customer.show', 'aksteel') }}"><img src='img/customers/aksteel.jpg' onmouseover="this.src='img/customers/aksteel-hover.jpg';" onmouseout="this.src='img/customers/aksteel.jpg';" /></a>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <a href="{{ route('customer.show', 'statefarm') }}"><img src='img/customers/statefarm.jpg' onmouseover="this.src='img/customers/statefarm-hover.jpg';" onmouseout="this.src='img/customers/statefarm.jpg';" /></a>
            </div>
        </div>
        <!-- /row -->
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
                <a href="{{ route('customer.show', 'louisiana') }}"><img src='img/customers/louisiana.jpg' onmouseover="this.src='img/customers/louisiana-hover.jpg';" onmouseout="this.src='img/customers/louisiana.jpg';" /></a>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <a href="{{ route('customer.show', 'cwc') }}"><img src='img/customers/cwc.jpg' onmouseover="this.src='img/customers/cwc-hover.jpg';" onmouseout="this.src='img/customers/cwc.jpg';" /></a>
            </div>
        </div>
        <!-- /row -->
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
                <a href="{{ route('customer.show', 'spplus') }}"><img src='img/customers/spplus.jpg' onmouseover="this.src='img/customers/spplus-hover.jpg';" onmouseout="this.src='img/customers/spplus.jpg';" /></a>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <a href="{{ route('customer.show', 'cityfurniture') }}"><img src='img/customers/city.jpg' onmouseover="this.src='img/customers/city-hover.jpg';" onmouseout="this.src='img/customers/city.jpg';" /></a>
            </div>
        </div>
        <!-- /row -->
    </div>
    <!-- container -->
</div>
<!-- /customers -->
<div class="our-customers">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <h1>Our Partners</h1>
                <img src="img/customers/logos.png">
            </div>
        </div>
    </div>
</div>

@include('partials._live_demo')
<hr>
@stop