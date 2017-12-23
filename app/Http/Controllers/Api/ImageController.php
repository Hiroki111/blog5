<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Image;

class ImageController extends Controller
{

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function index()
    {
        return Storage::allFiles(env('STORAGE_IMAGE_FOLDER'));
    }

    public function show($fileName)
    {
        return Storage::file(env('STORAGE_IMAGE_FOLDER') . $fileName);
    }

    public function store()
    {
        if (!$this->request->hasFile('image')) {
            return 'No file selected';
        }

        $file = $this->request->file('image');
        $name = $file->getClientOriginalName();
        $name = env('STORAGE_IMAGE_FOLDER') . date("YmdHis") . '.png';
        $file = Image::make($file);
        $file = (string) $file->encode();
        Storage::put($name, $file);
        return $name;
    }

    public function destroy()
    {
        $fileName = $this->request->input('image');
        Storage::delete($fileName);
        return $fileName;
    }
}
