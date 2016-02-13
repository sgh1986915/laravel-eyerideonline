<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $table = 'product_images';

    protected $fillable = ['filename', 'product_id', 'featured', 'hero'];

    public function product()
    {
        return $this->belongsTo('App\Product');
    }
}
