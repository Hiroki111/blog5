<!doctype html>
<html>
<head>
    <title>@yield('title')</title>
    <link href="{{ asset('css/www.css') }}" rel="stylesheet">
</head>
<body>
    <header>
        <img id="logo_image" src="/storage/logo.jpg">
        <h1 id="header_title">Hiroki.com</h1>
        <p id="subheader_title">Web developer</p>
    </header>
    <div id="container">
        <div id="posts">
            @yield('content')
        </div>
    </div>
</body>
</html>
