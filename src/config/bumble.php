<?php

return [

    /*
    |--------------------------------------------------------------------------
    | The Models to Show in Bumble
    |--------------------------------------------------------------------------
    */
    'models' => [
        // 'user' => 'App\User'
    ],

    /*
    |--------------------------------------------------------------------------
    | Admin Settings
    |--------------------------------------------------------------------------
    */
    'site-title' => 'EyeRide',
    'site-url' => 'http://eyeride.app',
    'site-title-image' => '',

    /*
    |--------------------------------------------------------------------------
    | Authentication
    |--------------------------------------------------------------------------
    */
    'auth_columns' => ['email', 'password'],

    /*
    |--------------------------------------------------------------------------
    | User Trait Column Settings
    |--------------------------------------------------------------------------
    */
    'email' => 'email',
    'first_name' => 'first_name',
    'last_name' => 'last_name',

    /*
    |--------------------------------------------------------------------------
    | Pagination
    |--------------------------------------------------------------------------
    */
    'paginate' => 10,

    /*
    |--------------------------------------------------------------------------
    | Amazon S3 Configuration
    |--------------------------------------------------------------------------
    */
    'S3-key' => '',
    'S3-secret' => '',
    'bucket_name' => '',

    /*
    |--------------------------------------------------------------------------
    | Admin Prefix
    |--------------------------------------------------------------------------
    */
    'admin_prefix' => 'admin',

    /*
    |--------------------------------------------------------------------------
    | Routes
    |--------------------------------------------------------------------------
    */
    'admin' => [
        'login' => 'login',
        'logout' => 'logout',
        'dashboard' => 'dashboard',
        'forgot_password' => 'forgot-password',
        'reset_password' => 'reset-password',
    ]
];
