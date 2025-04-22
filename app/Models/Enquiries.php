<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enquiries extends Model
{
    protected $fillable = ['fname', 'lname', 'email', 'phone', 'service', 'msg'];
}
