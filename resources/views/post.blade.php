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
<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
this.page.url = "{{env('APP_URL').'/'.$post->url}}";  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = "{{env('APP_URL').'/'.$post->id}}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
	var d = document, s = d.createElement('script');
	s.src = 'https://hiroki-com.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>


@endsection
