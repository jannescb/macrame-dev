const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.ts', 'public/js').vue();

mix.postCss('resources/css/app.css', 'public/css', [require('tailwindcss')]);

mix.browserSync({
    proxy: 'macrame-dev.test',
    notify: false,
});

mix.webpackConfig({
    resolve: {
        alias: {
            vue: path.resolve('./node_modules/vue'),
        },
    },
});
