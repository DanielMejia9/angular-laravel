<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Placesave extends Model
{
       /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title_places', 'price_places', 'owner_places','number_phone_places',
        'number_phone_optional_places','address_places','bathroom_places','bedroom_places',
        'parking_places','room_places','kitchen_places','dining_table_places','id_user','type_places',
        'portada','imagen1','image2','imagen3','imagen4','imagen5',
    ];

    protected $hidden = [
        '',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime',
    ];


}
