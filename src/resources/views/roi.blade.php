@extends('master')

@section('content')

<!-- ==== HEADERWRAP ==== -->
<div id="headerwrap-solutions">
    <header>
        <h1>Spell out GPS, FLIR, WiFi, AIO and IR: R-O-I</h1>
        <p>Calculate just how much EyeRide could save your business.</p>
    </header>
</div>

<!--  -->
<div class="header-blue-company">
    <div class="container-fluid">
        <h1>Savings Calculator</h1>
    </div>
</div>

<div class="roi-calc">
	<div class="container">
		<div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <p class="text-center">Whether your driver is sleeping on the job, idling too long, texting and driving, taking extended breaks, or
                disobeying the rules of the road, every minute of irresponsible driver behavior is money coming right out of your pocket. With EyeRide,
                you’ll save money by ensuring optimal driver performance and productivity. Use our ROI calculator to see how how much you can save with the
                EyeRide solution.</p>
            </div>
			<div class="col-lg-6 form-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Number of Vehicles/Drivers" id="drivernum" required data-validation-required-message="Please enter Number of Vehicles/Drivers.">
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Hourly Cost Per Driver" id="cpdriver" required data-validation-required-message="Please enter Number of Vehicles/Drivers.">
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group bottom-margin">
                    <input type="text" class="form-control" placeholder="Number of Wasted Hours Per Day" id="hoursspent" required data-validation-required-message="Please enter Number of Vehicles/Drivers.">
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Number of Devices Installed = Number of Vehicles" id="devices" required data-validation-required-message="Please enter Number of Vehicles/Drivers." readonly>
                    <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Connectivity Cost = 89$ Per Month" id="connectivitycost" required data-validation-required-message="Please enter Number of Vehicles/Drivers." readonly>
                    <p class="help-block text-danger"></p>
                </div>

                <button class="btn btn-calc">calculate</button>
				<button class="btn btn-clear">clear</button>

			</div>
			<div class="col-lg-6 calculations">
                <div class="loss col-lg-12">
                     <div class="col-lg-5 col-md-5">
                        <div class="daily-loss"><span>$0</span><p>Daily Loss</p></div>
                    </div>

                    <div class="col-lg-7 col-md-7">
                        <div class="monthly-loss">Monthly Loss <p>$0</p></div>
                        <div class="yearly-loss">Yearly Loss<p>$0</p></div>
                    </div>
                </div>

    			<div class="cost col-lg-12">
                    <div class="col-lg-5 col-md-5">
                        <div class="daily-cost"><span>$0</span><p>Daily Cost</p></div>
                    </div>

                    <div class="col-lg-7 col-md-7">
                        <div class="monthly-cost">Monthly Cost <p>$0</p></div>
                        <div class="yearly-cost">Yearly Cost<p>$0</p></div>
                    </div>
                </div>

                <div class="savings col-lg-12">
                    <div class="col-lg-5 col-md-5">
                        <div class="daily-savings"><span>$0</span><p>Daily Savings</p></div>
                    </div>

                    <div class="col-lg-7 col-md-7">
                        <div class="monthly-savings">Monthly Savings <p>$0</p></div>
                        <div class="yearly-savings">Yearly Savings<p>$0</p></div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</div>


<div class="roi-save">
	<div class="container-fluid">
		<h1>ROI From Day One</h1>
	</div>
</div>

@include('partials._live_demo_alt')
<hr>

                {{-- <div class="loss col-sm-12">
                    <div class="col-sm-5">
                        <div class="daily-loss col-sm-12 dlv">$0</div>
                        <div class="daily-loss col-sm-12">Daily Loss</div>
                    </div>
                    <div class="col-sm-7 monthly">
                        <div class="col-sm-5"><br>Monthly Loss</div><div class="mlv col-sm-7">$0</div>
                    </div>
                    <div class="col-sm-7 yearly">
                        <div class="col-sm-5"><br>Yearly Loss</div><div class="ylv col-sm-7">$0</div>
                    </div>
                </div>

                 <div class="cost col-sm-12">
                    <div class="col-sm-5">
                        <div class="daily-cost col-sm-12 dcv">$0</div>
                        <div class="daily-cost col-sm-12">Daily Cost</div>
                    </div>
                    <div class="col-sm-7 monthly">
                        <div class="col-sm-5">Monthly Cost</div><div class="mcv col-sm-7">$0</div>
                    </div>
                    <div class="col-sm-7 yearly">
                        <div class="col-sm-5">Yearly Cost</div><div class="ycv col-sm-7 ">$0</div>
                    </div>
                </div>

                <div class="savings col-sm-12">
                    <div class="col-sm-5">
                        <div class="daily-savings col-sm-12 dsv">$0</div>
                        <div class="daily-savings col-sm-12">Daily Savings</div>
                    </div>
                    <div class="col-sm-7 monthly">
                        <div class="col-sm-5">Monthly Savings</div><div class="msv col-sm-7 ">$0</div>
                    </div>
                    <div class="col-sm-7 yearly">
                        <div class="col-sm-5">Yearly Savings</div><div class="ysv col-sm-7 ">$0</div>
                    </div>
                </div> --}}


@stop