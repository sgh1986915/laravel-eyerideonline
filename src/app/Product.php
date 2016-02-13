<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'category', 'subcategory', 'excrept', 'description', 'video'];

    public function images()
    {
        return $this->hasMany('App\ProductImage', 'product_id');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag', 'products_tags', 'product_id', 'tag_id');
    }

    public function getFeaturedImageAttribute()
    {
        return $this->images()->where('featured', true)->first();
    }

    public function getHeroImageAttribute()
    {
        return $this->images()->where('hero', true)->first();
    }

    public function getTopImageAttribute()
    {
        return $this->images()->where('top', true)->first();
    }

    public function getGeneralImagesAttribute()
    {
        return $this->images()->where('hero', false)->where('featured', false)->get();
    }

    public function downloads()
    {
        return $this->hasMany('App\ProductDownload', 'product_id');
    }

    public function getDownloadFilesAttribute()
    {
        return $this->downloads()->get();
    }

    public function getVideosAttribute()
    {
        return json_decode($this->video);
    }

    public function getSlidersAttribute()
    {
        return json_decode($this->slider_images);
    }

}
