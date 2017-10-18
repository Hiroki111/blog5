<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePost;
use App\Post;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PostController extends Controller
{

    private $post;

    public function __construct(Request $request, Post $post)
    {
        $this->request = $request;
        $this->post    = $post;
    }

    public function index()
    {
        return $this->post->all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePost $request)
    {
        $post = $this->post->create([
            'title'        => $this->request->input('title'),
            'active'       => $this->request->input('active'),
            'body'         => $this->request->input('body'),
            'user_id'      => Auth::id(),
            'published_at' => ($this->request->input('active') > 0) ? Carbon::now() : null,
        ]);
        return $post;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StorePost $request, $id)
    {
        $post = $this->post->find($id);
        $post->update($request->all());
        return $post;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = $this->post->find($id);
        $post->delete();
        return $id;
    }
}
