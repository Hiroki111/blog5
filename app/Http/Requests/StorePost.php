<?php

namespace App\Http\Requests;

use App\Post;
use Illuminate\Foundation\Http\FormRequest;

class StorePost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'POST':
                {
                    return [
                        'title' => 'required|unique:posts|max:255',
                        'body'  => 'required',
                    ];
                }
            case 'PUT':
                {
                    $post = Post::find($this->get('id'));
                    return [
                        'title' => 'required|unique:posts,title,' . $post->id . '|max:255',
                        'body'  => 'required',
                    ];
                }
            default:break;
        }
    }

}
