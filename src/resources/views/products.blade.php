@extends('master')

@section('content')
<!-- ==== HEADERWRAP ==== -->
<div id="headerwrap-products">
<header>
<h1>Take in your entire reality</h1>
<p>Versatile and fully scalable, the EyeRide product range offers a comprehensive
solution to manage, monitor and control any size fleet in any field of operations.</p>
</header>
</div>

<div class="float-menu-products" data-spy="affix" data-offset-top="380">
    <div class="container">
        <div class="nav-float">
            <ul class="nav navbar-nav">
                <li><a href="javascript:;" class="filter active" data-filter="all"><span>ALL PRODUCTS</span></a></li>
                <li>
                    <a href="#mdvr" class="filter" data-filter=".category-1"><img src="{{ asset('img/products/icons/mdvr.png') }}"><span>MDVR</span></a>
                </li>
                <li>
                    <a href="#cameras" class="filter" data-filter=".category-2"><img src="{{ asset('img/products/icons/cameras.png') }}"><span>Cameras</span></a>
                </li>
                <li>
                    <a href="#gps" class="filter" data-filter=".category-3"><img src="{{ asset('img/products/icons/gps.png') }}"><span>GPS</span></a>
                </li>
                <li>
                    <a href="#flirdve" class="filter" data-filter=".category-4"><img src="{{ asset('img/products/icons/flir.png') }}"><span>FLIR</span></a>
                </li>
                <li>
                    <a href="#wifionboard" class="filter" data-filter=".category-5"><img src="{{ asset('img/products/icons/wifi.png') }}"><span>Wi-Fi</span></a>
                </li>
                <li>
                    <a href="#controlcenter" class="filter" data-filter=".category-6"><img src="{{ asset('img/products/icons/fleetacc.png') }}"><span>Fleet Access Control</span></a>
                </li>
                <li>
                    <a href="#antennas" class="filter" data-filter=".category-7"><img src="{{ asset('img/products/icons/accessories.png') }}"><span>Accessories</span></a>
                </li>
            </ul>
        </div>
        <button id="nav-on-small" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="dropdown-title">ALL PRODUCTS</span>
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="nav-on-small">
            <li><a href="javascript:;" class="filter active" data-filter="all"><span>ALL PRODUCTS</span></a></li>
            <li>
                <a href="javascript:;" class="filter" data-filter=".category-1"><img src="{{ asset('img/products/icons/mdvr.png') }}"><span>MDVR</span></a>
            </li>
            <li>
                <a href="javascript:;" class="filter" data-filter=".category-2"><img src="{{ asset('img/products/icons/cameras.png') }}"><span>Cameras</span></a>
            </li>
            <li>
                <a href="javascript:;" class="filter" data-filter=".category-3"><img src="{{ asset('img/products/icons/gps.png') }}"><span>GPS</span></a>
            </li>
            <li>
                <a href="javascript:;" class="filter" data-filter=".category-4"><img src="{{ asset('img/products/icons/flir.png') }}"><span>FLIR</span></a>
            </li>
            <li>
                <a href="javascript:;" class="filter" data-filter=".category-5"><img src="{{ asset('img/products/icons/wifi.png') }}"><span>Wi-Fi</span></a>
            </li>
            <li>
                <a href="javascript:;" class="filter" data-filter=".category-6"><img src="{{ asset('img/products/icons/fleetacc.png') }}"><span>Fleet Access Control</span></a>
            </li>
            <li>
                <a href="javascript:;" class="filter" data-filter=".category-7"><img src="{{ asset('img/products/icons/accessories.png') }}"><span>Accessories</span></a>
            </li>
        </ul>
    </div>
</div>

<div id="mixContainer">
    <div class="container-products" id="mdvr">
        <div class=" mix category-1 title"><h1>MDVR</h1></div>
        @foreach ($products->where('category', 'MDVR') as $product)
        <div class="one-product mix category-1">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

     <div class="container-products" id="cameras">
        <div class=" mix category-2 title"><h1>Cameras</h1></div>
        @foreach ($products->where('category', 'Cameras') as $product)
        <div class="one-product mix category-2">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="gps">
        <div class=" mix category-3 title"><h1>GPS</h1></div>
        @foreach ($products->where('category', 'GPS') as $product)
        <div class="one-product mix category-3">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="flirdve">
        <div class=" mix category-4 title"><h1>FLIR (DVE)</h1></div>
        @foreach ($products->where('category', 'FLIR (DVE)') as $product)
        <div class="one-product mix category-4">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="wifionboard">
        <div class=" mix category-5 title"><h1>WiFi On-Board</h1></div>
        @foreach ($products->where('category', 'WiFi On-Board') as $product)
        <div class="one-product mix category-5">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}">
                        <img style="width: 331px;" src="/media/products/{{ $product->featuredImage->filename }}">
                    </a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="controlcenter">
        <div class=" mix category-6 title"><h1>Control Center</h1></div>
        @foreach ($products->where('category', 'Control Center') as $product)
        <div class="one-product mix category-6">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="eyesitestation">
        <div class=" mix category-6 title"><h1>EyeSite Station</h1></div>
        @foreach ($products->where('category', 'EyeSite Station') as $product)
        <div class="one-product mix category-6">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="fleetaccesscontrol">
        <div class=" mix category-6 title"><h1>Fleet Access Control</h1></div>
        @foreach ($products->where('category', 'Fleet Access Control') as $product)
        <div class="one-product mix category-6">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="antennas">
        <div class=" mix category-7 title"><h1>Accessories - Antennas</h1></div>
        @foreach ($products->where('category', 'Accessories')->where('subcategory', 'Antennas') as $product)
        <div class="one-product mix category-7">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="mobilecomputer">
        <div class=" mix category-7 title"><h1>Accessories - Mobile Computer</h1></div>
        @foreach ($products->where('category', 'Accessories')->where('subcategory', 'Mobile Computer') as $product)
        <div class="one-product mix category-7">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="monitor">
        <div class=" mix category-7 title"><h1>Accessories - Monitor</h1></div>
        @foreach ($products->where('category', 'Accessories')->where('subcategory', 'Monitor') as $product)
        <div class="one-product mix category-7">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="microphonesandspeakers">
        <div class="mix category-7 title"><h1>Accessories - Microphones and Speakers</h1></div>
        @foreach ($products->where('category', 'Accessories')->where('subcategory', 'Microphones and Speakers') as $product)
        <div class="one-product mix category-7">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="container-products" id="miscellaneous">
        <div class="mix category-7 title"><h1>Accessories - Miscellaneous</h1></div>
        @foreach ($products->where('category', 'Accessories')->where('subcategory', 'Miscellaneous') as $product)
        <div class="one-product mix category-7">
            <div class="product-box ">
                <div class="product-img">
                    <a href="{{ route('product.show', $product->id) }}"><img src="/media/products/{{ $product->featuredImage->filename }}"></a>
                </div>
                <div class="product-content">
                    <hr>
                    <ul>
                        <li>{!! str_replace("\n", '</li><li>', $product->excrept) !!}</li>
                    </ul>
                    <div class="product-footer">
                        @foreach ($product->tags as $tag)
                        <button class="btn btn-default1">{{ $tag->short_name }}</button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>

@include('partials._roi')
@include('partials._live_demo')
<hr>
@stop

@section('scripts')
<script src="http://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js"></script>
<script type="text/javascript" src="{{ asset('js/mixitupinit.js') }}"></script>
@stop