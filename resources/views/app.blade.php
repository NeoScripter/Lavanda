<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preload" href="{{ asset('fonts/Montserrat-Regular.woff2') }}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{ asset('fonts/Montserrat-Medium.woff2') }}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{ asset('fonts/Montserrat-Bold.woff2') }}" as="font" type="font/woff2" crossorigin>
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">

    <style>
        @font-face {
            font-family: 'Montserrat';
            src: url('/fonts/Montserrat-Bold.woff2') format('woff2');
            font-weight: bold;
            font-display: swap
        }

        @font-face {
            font-family: 'Montserrat';
            src: url('/fonts/Montserrat-Medium.woff2') format('woff2');
            font-weight: 500;
            font-display: swap
        }

        @font-face {
            font-family: 'Montserrat';
            src: url('/fonts/Montserrat-Regular.woff2') format('woff2');
            font-weight: normal;
            font-display: swap
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
    <div aria-hidden="true" id="beacon"></div>
</body>

</html>
