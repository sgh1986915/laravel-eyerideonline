@extends('master')

@section('content')
<div class="upnav-accessories general">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
                <a href="{{ route('product.index') }}#<?php echo strtolower(preg_replace("/[^a-zA-Z]+/", "", $product->category)); ?>">
                    < BACK TO PRODUCT</a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
                <a href="#" class="orange"><img src="{{ asset('img/products/navicon.png') }}"><span>{{ $product->category }}</span></a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
                <a href="#">{{ $product->name }}</a>
            </div>
        </div>
    </div>
</div>

<div id="img-slider">
    <div class="container">
        <div class="top-slider">
            <div>
                <div class="col-lg-6 col-md-6 col-sm-12 content-left">
                    <h1><b>{{ $product->name }}</b></h1>
                    <h4>{!! nl2br($product->subtitle, true) !!}</h4>
                    <br>
                    <p>{!! nl2br($product->long_highlight, true) !!}</p>
                    <!-- <button class="btn btn-orange">Learn more about ACC 100</button> -->
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 content-right">
                    <img src="{{ asset('media/products/'.$product->topImage->filename) }}" style="width: 700px">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="board">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1>{{ $product->title }}</h1>
                <p>{{ $product->highlight }}</p>
                <img src="{{ asset('media/products/'.$product->heroImage->filename) }}" style="width: 900px">
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

<div class="product-tags-big">
    <div class="container">
        <div class="row">
        @foreach ($product->tags as $tag)
            <div class="col-md-6 col-sm-6 one-tag">
                <h1>{{ $tag->name }}</h1>
                <p>{{ $tag->tagline }}</p>
                <img src="{{ asset('media/tags/'.$tag->image) }}">
            </div>
        @endforeach
        </div>
    </div>
</div>

@if (count($product->videos) == 1)
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

@if (count($product->videos) == 2)
<div class="video">
    <div class="container">
        <div id="general-product-video">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="vhold">
                        <iframe width="563" height="419" src="{{ $product->videos[0] }}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="vhold">
                        <iframe width="563" height="419" src="{{ $product->videos[1] }}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endif

<div id="second-img-slider">
    <div class="container-fluid">
        <div class="bottom-slider">
        @if (isset($product->Sliders) && !empty($product->Sliders))
            @foreach ($product->Sliders as $slider)
                <div><img src="{{ asset('media/products/slider/'.strtolower($slider)) }}"></div>
            @endforeach
        @endif
        </div>
    </div>
</div>

@if (count($product->downloadFiles) > 0 || $product->category == 'FLIR (DVE)' || $product->category == 'Cameras')
<div class="downloads">
    <div class="container">
        <div class="row">
            <h1>Downloads</h1>
            <hr>
            <table class="table-hover">
                <tbody>
                    @foreach ($product->downloadFiles as $file)
                    <tr>
                        <td>
                            @if ($file->type == 'link')
                            <a href="{{ $file->file }}" target="_blank">
                            @else
                            <a href="{{ route('downloadfile', $file->id) }}">
                            @endif
                                <img src="{{ asset('img/products/'.$file->icon) }}"><span>{{ $file->name }}</span>
                            </a>
                        </td>
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