<?php
namespace Rustam\Scandiweb\Core\Route;

final class Generate
{
    private array $serializeRoutes;

    public function __construct()
    {

    }

    public function findRoutes()
    {
        $this->getWebRoutes();
        return $this->matchRoute();
    }

    private function matchRoute()
    {
        $requestUri = $_SERVER['REQUEST_URI'];
        $requestMethod = $_SERVER['REQUEST_METHOD'];

        foreach( $this->serializeRoutes as $route ) {
            $check = $route->checkRoute($requestMethod, $requestUri);
            if ( $check ) {
                $namespace = $route->getController();
                $action = $route->getAction();
                $instance = new $namespace();
                return $instance->$action();
            }
        }
    }

    private function getWebRoutes()
    {
        $routes = include __DIR__ . '/../../Route/web.php';
        foreach( $routes as $route ) {
            $this->serializeRoutes[] = Route::serializeRoute($route);
        }
    }
}