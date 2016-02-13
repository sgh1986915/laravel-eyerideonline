<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['name', 'short_name', 'image'];

    public function products()
    {
        return $this->belongsToMany('App/Product', 'products_tags');
    }
}
