<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // Autoriser l'assignation en masse pour l'attribut 'title'
    protected $fillable = ['title'];
}