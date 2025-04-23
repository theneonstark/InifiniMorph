<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enquiries extends Model
{
    protected $fillable = ['fname', 'lname', 'email', 'phone', 'service', 'msg'];

    public function getCreatedAtAttribute($value){
        return date('d M y - h:i A', strtotime($value));
    }

    public function getUpdatedAtAttribute($value){
        return date('d M y - h:i A', strtotime($value));
    }
}
