@extends('layouts.www.master')


@section('title', 'Hiroki.com')

@section('content')

@foreach($posts as $post)
<div class="titleHeader">
    <h1 id="title_{{$post->id}}">{{$post->title}}</h1>
</div>
<h4>{{date("d M Y", strtotime($post->published_at))}}</h4>
<div >
    <div id="body_{{$post->id}}">{!! $post->body !!}</div>
</div>
@endforeach

@endsection
