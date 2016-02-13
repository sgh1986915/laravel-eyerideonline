<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddProductDownloadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
	    Schema::create('product_downloads', function (Blueprint $table) {
		    $table->increments('id');
		    $table->integer('product_id');
		    $table->char('icon');
		    $table->char('file');
		    $table->char('name');
		    $table->text('description');
		    $table->timestamps();
	    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
	    Schema::drop('product_downloads');
    }
}
