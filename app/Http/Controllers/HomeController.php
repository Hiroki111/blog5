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
            'posts' => $this->post->where('active', '=', 1)
                ->orderBy('id', 'dec')
                ->paginate(5),
        ]);
    }

    public function show($url)
    {
        $post = $this->post->where('url', '=', $url)
            ->where('active', '=', 1)
            ->first();
        $prev = $this->post->where('id', '<', $post->id)
            ->where('active', '=', 1)
            ->orderBy('id', 'dec')
            ->first();
        $next = $this->post->where('id', '>', $post->id)
            ->where('active', '=', 1)
            ->orderBy('id', 'dec')
            ->first();

        return view('post', [
            'post' => $post,
            'prev' => $prev,
            'next' => $next,
        ]);
    }
}
