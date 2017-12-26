<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;
    protected $table    = 'posts';
    protected $fillable = [
        'active',
        'title',
        'url',
        'body',
        'user_id',
        'published_at',
    ];
    protected $dates = [
        'published_at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    public $timestamps = true;

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
