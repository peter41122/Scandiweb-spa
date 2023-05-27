<?php

use Rustam\Scandiweb\Http\Controllers\ProductController;

return [
    [
        'http_verb' =>  'GET',
        'http_route'    =>  '/',
        'http_controller'   =>  ProductController::class,
        'http_action'   =>  'index',
    ],
    [
        'http_verb' =>  'GET',
        'http_route'    =>  '/products',
        'http_controller'   =>  ProductController::class,
        'http_action'   =>  'getProducts',
    ],
    [
        'http_verb' =>  'POST',
        'http_route'    =>  '/products',
        'http_controller'   =>  ProductController::class,
        'http_action'   =>  'postProduct',
    ],
    [
        'http_verb' =>  'POST',
        'http_route'    =>  '/delete-products',
        'http_controller'   =>  ProductController::class,
        'http_action'   =>  'deleteProduct',
    ],
];