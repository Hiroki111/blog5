<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminPageController extends Controller
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->middleware('auth');
        $this->request = $request;
    }

    public function index()
    {
        return view('auth.index');
    }
}
