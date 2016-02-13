<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductDownload extends Model
{
    protected $table = 'product_downloads';

    protected $fillable = ['file', 'product_id', 'name', 'description', 'type'];

    public function product()
    {
        return $this->belongsTo('App\Product');
    }
}
