<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>
    <link href="{{ asset('css/lib.css') }}" rel="stylesheet">
    <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
    <script src="{{ asset('js/lib.js') }}"></script>
</head>
<body style="background: white;">
    <nav class="navbar navbar-default navbar-static-top" @if(!Auth::guest()) style="background: gray; height: 47px; margin-bottom: 0; padding: 0px;" @endif>
        <div class="container" style="width: 95%;  margin-left: 0px; padding-left: 40px;">
            <div class="navbar-header">
                @if(Auth::guest())
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                @else
                <a class="navbar-brand" href="{{ url('/admin') }}">
                    Admin Area
                </a>
                @endif
            </div>
            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                 @if (!Auth::guest())
                 <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                        Logout
                    </a>
                    </li>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </ul>
                @endif
            </div>
        </div>
    </nav>

@yield('content')

</body>
</html>
