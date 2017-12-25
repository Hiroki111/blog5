<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    protected $request;
    protected $post;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Post $post)
    {
        $this->post    = $post;
        $this->request = $request;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index', [
            'posts' => $this->post->where('active', '=', 1)->orderBy('id', 'dec')->get(),
        ]);
    }
}
