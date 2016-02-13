var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('main.scss')
    .scripts([
        'slick.min.js',
        'slick-custom-slider.js',
        'jquery.easing.1.3.js',
        'smoothscroll.js',
        'bootstrap.min.js',
        'productSlider.js',
        'countUp.js',
        'jquery.visible.js',
        'main.js'
    ])
    .styles([
        'bootstrap.css',
        'normalize.css',
        'font-awesome.css',
        'slick.css',
        'slick-theme.css'
    ]);
    mix.copy('resources/assets/js/map.js', 'public/js/map.js');
});
