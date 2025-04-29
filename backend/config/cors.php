<?php

return [

    'paths' => ['wallet-login', 'projects','*'], // Asegurate de incluir tus rutas públicas
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'], // Tu front en Vite
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,

];
