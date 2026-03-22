<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preload" href="{{ asset('fonts/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2') }}" as="font" type="font/woff2"
        crossorigin>
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DW9FRDYJM7"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-DW9FRDYJM7');
    </script>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108181760', 'ym');

        ym(108181760, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/108181760" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

    <!-- Top.Mail.Ru counter -->
    <script type="text/javascript">
    var _tmr = window._tmr || (window._tmr = []);
    _tmr.push({id: "3751451", type: "pageView", start: (new Date()).getTime()});
    (function (d, w, id) {
      if (d.getElementById(id)) return;
      var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
      ts.src = "https://top-fwz1.mail.ru/js/code.js";
      var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
      if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
    })(document, window, "tmr-code");
    </script>
    <noscript><div><img src="https://top-fwz1.mail.ru/counter?id=3751451;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div></noscript>
    <!-- /Top.Mail.Ru counter -->

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
