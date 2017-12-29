<!doctype html>
<html>
<head>
    <title>@yield('title')</title>
    <link href="{{ asset('css/www.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap/bootstrap.min.css') }}" rel="stylesheet">
    <script src="{{ asset('js/lib.js') }}"></script>

</head>
<body>
    <header>
        <a href="/" id="logo_link">
            <img id="logo_image" src="/storage/logo.jpg">
            <h1 id="header_title">Hiroki.com</h1>
            <p id="subheader_title">Web developer</p>
        </a>
    </header>
    <div id="container">
        <div id="posts">
            @yield('content')
        </div>
        <div id="side_bar">
            <a href="/About">
                <h2>Author</h2>
                <img id="about_image" src="/storage/about.jpg">
            </a>
        </div>
    </div>
</body>
</html>
