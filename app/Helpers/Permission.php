<?php

namespace App\Helpers;

class Permission{

    public static function FormValidator($rules, $post)
    {
        $validator = \Validator::make($post->all(), array_reverse($rules));
        if ($validator->fails()) {
            foreach ($validator->errors()->messages() as $key => $value) {
                $error = $value[0];
            }
            return response()->json(array(
                'status'     => 'ERR',
                'statuscode' => 'ERR',
                'message'    => $error
            ));
        }else{
            return "no";
        }
    }

}