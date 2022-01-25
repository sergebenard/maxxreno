let mix = require('laravel-mix');

require('laravel-mix-svelte');

mix.js("src/js/app.js", "public/js/")
    .postCss("src/css/app.css", "public/css/", [
        require("tailwindcss"),
    ])
    .copy("src/html/index.html", "public/index.html")
    .svelte({
        dev: true
    });
