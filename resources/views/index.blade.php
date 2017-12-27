@extends('layouts.www.master')

@section('title', 'Hiroki.com')

@section('content')

@foreach($posts as $post)
<div class="post_wrapper">
	<div class="title_header">
		<a href="/{{$post->url}}">
			<h1 id="title_{{$post->id}}">{{$post->title}}</h1>
		</a>
	</div>
	<h4>{{date("d M Y", strtotime($post->published_at))}}</h4>
	<div class="post_excerpt">
		<div id="body_{{$post->id}}">{!! $post->body !!}</div>
	</div>
	<div class="post_continue_botton">
		<a href="/{{$post->url}}">
			<button type="button" class="btn btn-default">Continue</button>
		</a>
	</div>
</div>
@endforeach

@endsection
