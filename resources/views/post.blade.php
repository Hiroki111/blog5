@extends('layouts.www.master')

@section('title', 'Hiroki.com - '.$post->title)

@section('content')

<div class="titleHeader">
	<h1 id="title_{{$post->id}}">{{$post->title}}</h1>
</div>
<h4>{{date("d M Y", strtotime($post->published_at))}}</h4>
<div >
	<div id="body_{{$post->id}}">{!! $post->body !!}</div>
</div>
@if(!empty($next))
<div>
	<p>Next : <a href="/{{ $next->url }}">{{ $next->title }}</a></p>
</div>
@endif
@if(!empty($prev))
<div>
	<p>Previous : <a href="/{{ $prev->url }}">{{ $prev->title }}</a></p>
</div>
@endif

@endsection
