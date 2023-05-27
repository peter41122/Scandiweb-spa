<?php
namespace Rustam\Scandiweb\Core\Route;

final class Route
{
    private $httpVerb;

    private $httpRoute;

    private $httpController;
    
    private $httpAction;

    public function __construct(
        string $httpVerb,
        string $httpRoute,
        string $httpController,
        string $httpAction
    )
    {
        $this->httpVerb = $httpVerb;
        $this->httpRoute = $httpRoute;
        $this->httpController = $httpController;
        $this->httpAction = $httpAction;
    }

    public static function serializeRoute(array $route): self
    {
        return new static(
            $route['http_verb'],
            $route['http_route'],
            $route['http_controller'],
            $route['http_action']
        );
    }

    public function getController()
    {
        return $this->httpController;
    }

    public function getAction()
    {
        return $this->httpAction;
    }
    
    public function checkRoute(string $method, string $URI)
    {
        return $method == $this->httpVerb && $URI == $this->httpRoute;
    }
}