<!-- ==== NAVIGATION ==== -->
<div id="navbar-main ">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="{{ route('index') }}"><img src="{{ asset('img/logo.png') }}" style="width: 180px;" /></a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="{{ route('solutions') }}">Solutions</a></li>
                        <li><a href="{{ route('product.index') }}">Products</a></li>
                        <li><a href="{{ route('customer.index') }}">Customers</a></li>
                        <li><a href="{{ route('company') }}">Company</a></li>
                        <li><a href="http://eyeridegps.com">Login</a></li>
                        <li><a href="https://join.me/EyeRideOnline" class="orange">Meeting</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="tel:8886686698" class="telephone"><b>888 668 6698</b></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>