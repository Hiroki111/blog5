@extends('layouts.www.master')


@section('title', 'Hiroki.com')

@section('content')

@foreach($posts as $post)
<h1 class="titleDiv" id="title_{{$post->id}}">{{$post->title}}</h1>
<h4>{{date("d M Y", strtotime($post->published_at))}}</h4>
<div >
    <div id="body_{{$post->id}}" class="show_partially" style="width: 800px;">{!! $post->body !!}</div>
</div>
@endforeach

@endsection
