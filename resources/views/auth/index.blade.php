<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Admin') }}</title>

    <link href="{{ asset('css/lib.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">

    <script src="{{ asset('js/lib.js') }}"></script>
</head>
<body style="background: white;">
    <nav class="navbar navbar-default navbar-static-top" style="background: gray;">
        <div class="container" style="width: 95%;">
            <div class="navbar-header">
                <a class="navbar-brand" href="{{ url('/admin') }}">
                    Admin Area
                </a>
            </div>
            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                        Logout
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </ul>
            </div>
        </div>
    </nav>
    <div id="root"></div>
    <script src="{{ asset('js/admin.js') }}"></script>
</body>
</html>
