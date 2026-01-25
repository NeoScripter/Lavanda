<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preload" href="{{ asset('fonts/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2') }}" as="font" type="font/woff2" crossorigin>
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">

    <style>
        @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 100 900;
            font-display: swap;
            src: url('/fonts/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2') format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
    </style>

    @routes
    @viteReactRefresh
    @vite('resources/js/app.tsx')
    @inertiaHead
</head>

<body>
    @inertia
    <div id="portal-container"></div>
    <div id="modals"></div>
</body>

</html>
