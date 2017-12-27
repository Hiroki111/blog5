@extends('layouts.admin.master')
@section('content')
<script>
    const ROOT_URL = "{{ env('APP_URL') }}/";
</script>
<div id="root"></div>
<script src="{{ asset('js/admin.js') }}"></script>
@endsection
