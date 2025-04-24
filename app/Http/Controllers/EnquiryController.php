<?php

namespace App\Http\Controllers;

use App\Models\Enquiries;
use Illuminate\Http\Request;

class EnquiryController
{
    public function contact(Request $post){
        $data = [
            'fname' => $post->fName ? $post->fName : "Quick Contact",
            'lname' => $post->lName ? $post->lName : "Quick Contact",
            'email' => $post->email,
            'phone' => $post->phone ? $post->phone : "Quick Contact",
            'service' => $post->service,
            'msg' => $post->msg
        ];

        Enquiries::create($data);

        return response()->json(["status" => "ERR", 'message' => 'Something Went Wrong']);
    }

    public function enquiries(){
        $data = Enquiries::all();

        return response()->json($data);
    }
}
