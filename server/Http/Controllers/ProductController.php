<?php
namespace Rustam\Scandiweb\Http\Controllers;

use Rustam\Scandiweb\Core\Request\contracts\RequestInterface;
use Rustam\Scandiweb\Core\Request\Request;
use Rustam\Scandiweb\Http\Services\ProductService;
use Jenssegers\Blade\Blade;

final class ProductController
{
    private RequestInterface $request;

    private $service;

    public function __construct()
    {
        $this->request = new Request();
        $this->service = new ProductService();
    }

    public function index()
    {
        $blade = new Blade('../server/views', '../server/cache');
        return $blade->make('index')->render();
    }

    /**
     * @method GET
     * @link /products
     */
    public function getProducts()
    {
        return response([
            'status'    =>  true,
            'entity'    =>  $this->service->findProducts(),
        ]);
    }

    /**
     * @method POST
     * @link /products
     */
    public function postProduct()
    {
        $productData = [
            'sku'   =>  $this->request->sku,
            'name'  =>  $this->request->name,
            'price' =>  $this->request->price,
            'type'  =>  $this->request->type,
            'type_value'    =>  $this->request->type_value
        ];

        $this->service->postProduct($productData);
    }

    /**
     * @method POST
     * @link /delete-products
     */
    public function deleteProduct()
    {
        return $this->service->deleteProduct($this->request->product_ids);
    }   
}