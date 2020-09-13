<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlacesavesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('placesaves', function (Blueprint $table) {
            $table->id();
            $table->string('title_places');
            $table->integer('price_places');
            $table->string('owner_places');
            $table->string('number_phone_places');
            $table->string('number_phone_optional_places');
            $table->string('type_operation');
            $table->string('address_places');
            $table->string('departament');
            $table->string('municipality');
            $table->string('location');
            $table->integer('bathroom_places');
            $table->integer('bedroom_places');
            $table->integer('parking_places');
            $table->integer('room_places');
            $table->integer('kitchen_places');
            $table->integer('dining_table_places');
            $table->string('imagen0');
            $table->integer('id_user');
            $table->integer('type_places');
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('placesaves');
    }
}
