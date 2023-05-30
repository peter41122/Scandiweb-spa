<?php
namespace Rustam\Scandiweb\Http\Services;

use Rustam\Scandiweb\Model\Product;
use Rustam\Scandiweb\Model\ProductType;

//TODO need use repository

class ProductService
{
    private $productModel;

    public function __construct()
    {
        $this->productModel = new Product();
        $this->productTypeModel = new ProductType();
    }

    public function findProducts()
    {
        return $this->productModel
            ->all()
            ->leftJoin('product_type', 'product_id', 'id')
            ->orderBy()
            ->get();
    }

    public function postProduct(array $productData)
    {
        $typeValue = $productData['type_value'];
        unset($productData['type_value']);

        $res = $this->productModel->create($productData);
        $typeRes = $this->productTypeModel->create([
            'product_id'    =>  $res['id'],
            'value' =>  json_encode($typeValue)
        ]);
        if ( $typeRes ) {
            $res['type_value'] = (array) json_decode($typeRes['value']);
            $res['type_value']['id'] = $typeRes['id'];
        }
        return $res;
    }

    public function deleteProduct(array $productIds)
    {
        $this->productModel->delete($productIds);
        $this->productTypeModel->delete($productIds, 'product_id');
        return true;
    }
}