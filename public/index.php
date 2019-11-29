<?php

function get_routes($filePath) {
    $routes = [];
    if(!file_exists($filePath)) {
        return $routes;
    }
    if(!is_readable($filePath)) {
        return $routes;
    }

    $raw = @file_get_contents($filePath);

    if($raw === false) {
        return $routes;
    }

    $all_routers = json_decode($raw, true);
    $routes = $all_routers['routers'] ?? [];
    return array_flip($routes);
}
  
$routes = get_routes(__DIR__ . '/routers.json');

$route = $_SERVER['REQUEST_URI'] ?? '';


if(!array_key_exists($route, $routes)) {
    header('HTTP/1.0 404 Not Found', true, 404);
}

include __DIR__ . '/index.html';

