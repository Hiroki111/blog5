<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes, HasApiTokens;

    protected $table    = 'users';
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
    public $timestamps = true;

    public function posts()
    {
        return $this->hasMany('App\Post');
    }
}
