<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function index()
    {
        return Storage::allFiles(env('IMAGE_FOLDER'));
    }

    public function show($fileName)
    {
        return Storage::file(env('IMAGE_FOLDER') . $fileName);
    }

    public function store()
    {
        if ($this->request->hasFile('image')) {
            return Storage::putFile(env('IMAGE_FOLDER'), $this->request->file('image'));
        }

        return 'No file selected';
    }

    public function destroy($fileName)
    {
        return Storage::delete(env('IMAGE_FOLDER') . $fileName);
    }
}
