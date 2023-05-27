<?php

if (! function_exists('dd')) {
    function dd(...$inputs) {
        return highlight_string("<?php\n\$data =\n" . var_export($inputs, true) . ";\n?>");
    }
}

if (! function_exists('response')) {
    function response($response) {
        return json_encode($response);
    }
}

if (! function_exists('generateRandomString') ) {
    function generateRandomString($length = 10) {
        return substr(str_shuffle(str_repeat($x='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
    }
}
