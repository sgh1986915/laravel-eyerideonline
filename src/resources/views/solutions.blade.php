@extends('master')

@section('content')
<!-- ==== HEADERWRAP ==== -->
<div id="headerwrap-solutions">
    <header>
        <h1>Total awareness</h1>
        <p>Experience the eye-opener that shows the road to success.</p>
    </header>
</div>
<div class="float-menu-solutions" data-spy="affix" data-offset-top="380">
    <div class="container">
        <div class="row">
            <ul class="" role="tablist" id="solutions-tabs">
                <li role="presentation" class="active col-lg-4 col-sm-4 col-xs-12"><a href="#benefits" aria-controls="benefits" role="tab" data-toggle="tab">Benefits</a></li>
                <li class="col-lg-4 col-sm-4 col-xs-12" role="presentation"><a href="#industries" aria-controls="industries" role="tab" data-toggle="tab">Industries</a></li>
                <li class="col-lg-4 col-sm-4 col-xs-12" role="presentation"><a href="#features" aria-controls="features" role="tab" data-toggle="tab">Features</a></li>
            </ul>
        </div>
    </div>
</div>

<div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="benefits">
        @include('partials._solutions_benefits')
    </div>
    <div role="tabpanel" class="tab-pane" id="industries">
        @include('partials._solutions_industries')
    </div>
    <div role="tabpanel" class="tab-pane" id="features">
        @include('partials._solutions_features')
    </div>
</div>
@include('partials._testimonials')
@include('partials._roi')
@include('partials._live_demo')
<hr>
@stop

@section('scripts')
<script type="text/javascript">
    var hash = document.location.hash;
    var prefix = 'tab_';

    if (hash) {
        var hashes = hash.split('#');
    // console.log(hashes[1]);
        var tab = hashes[1];
        var div = hashes[2];
        $('.float-menu-solutions a[href=#' + tab.replace(prefix, '') + ']').tab('show');
        $('html,body').animate({
            scrollTop: $('#'+div).offset().top
        }, 'fast');
    }

    // Change hash for page-reload
    $('.float-menu-solutions a').on('shown', function (e) {
        window.location.hash = e.target.hash.replace('#', '#' + prefix);
    });

    $('body').on('click', '.show-all-features', function(event) {
        event.preventDefault();
        $('.float-menu-solutions a[href=#features]').tab('show');
        $('html,body').animate({
            scrollTop: $('#unlimited-data').offset().top
        }, 'fast');la
    });
</script>
@stop