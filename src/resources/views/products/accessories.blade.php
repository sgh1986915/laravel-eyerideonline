@extends('master')

@section('content')
<div id="headerwrap-accessories">
    <header>
        <h1>Accesories</h1>
    </header>
</div>

<div class="upnav-accessories">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
                <a href="{{ route('product.index') }}#<?php echo strtolower(preg_replace("/[^a-zA-Z]+/", "", $product->subcategory)); ?>">< BACK TO PRODUCT</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
                <a href="#" class="orange"><img src="{{ asset('img/accessories/accnavico.png') }}"><span>Accessories</span></a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
                <a href="#" class="text-muted">{{ $product->subcategory }}: {{ $product->name }}</a>
            </div>
        </div>
    </div>
</div>

<div id="accsection">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h1 class="hide-on-big">{{ $product->title }}</h1>
                <div id="product-slider-main">
                @if (isset($product->Sliders) && !empty($product->Sliders))
                    @foreach ($product->Sliders as $slider)
                        <img src="{{ asset('media/products/slider/'.$slider) }}">
                    @endforeach
                @else
                    <img src="{{ asset('img/accessories/accproduct.jpg') }}">
                    <img src="{{ asset('img/accessories/accproduct.jpg') }}">
                    <img src="{{ asset('img/accessories/accproduct.jpg') }}">
                @endif
                </div>
                <div id="product-slider-thumbs">
                @if (isset($product->Sliders) && !empty($product->Sliders))
                    @foreach ($product->Sliders as $slider)
                        <img src="{{ asset('media/products/slider/'.$slider) }}">
                    @endforeach
                @else
                    <img src="{{ asset('img/accessories/accproduct.jpg') }}">
                    <img src="{{ asset('img/accessories/accproduct.jpg') }}">
                    <img src="{{ asset('img/accessories/accproduct.jpg') }}">
                @endif
                </div>
            </div>

            <div class="col-lg-6">
                <div class="acc-content">
                    <h1 class="hide-on-small">{{ $product->title }}</h1>
                    <p>{{ $product->highlight }}</p>
                    <hr />
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="request-quote">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-sm-10">
                <h1>Get yours today, request a quote!</h1>
            </div>
            <div class="col-lg-2 col-sm-2">
                <a href="{{ route('company') }}#contact" class="btn btn-white"><strong>Order Now</strong></a>
            </div>
        </div>
    </div>
</div>

@if ($product->subcategory == 'Mobile Computer')
<div class="video">
    <div class="container">
        <div id="general-product-video">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <iframe width="100%" height="720" src="{{ $product->videos[0] }}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>    
        </div>  
    </div>
</div>
@endif

@if (count($product->downloadFiles) > 0 || $product->subcategory == 'Mobile Computer')
<div class="downloads">
    <div class="container">
        <div class="row">
            <h1>Downloads</h1>
            <hr>
            <table class="table-hover">
                <tbody>
                    @foreach ($product->downloadFiles as $file)
                    <tr>
                        <td><a href="{{ route('downloadfile', $file->id) }}"><img src="{{ asset('img/products/'.$file->icon) }}"><span>{{ $file->name }}</span></a></td>
                        <td><h5>{{ $file->description }}</h5></td>
                        <td><h5>{{ date('m.d.Y', strtotime($file->created_at)) }}</h5></td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endif

@include('partials._roi')
@include('partials._live_demo')
<hr>
@stop