const mix = require('laravel-mix');

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

mix.copy('node_modules/adminbsb-materialdesign/css', 'public/assets/adminsbs/css');
mix.copy('node_modules/adminbsb-materialdesign/images', 'public/assets/adminsbs/images');
mix.copy('node_modules/adminbsb-materialdesign/js', 'public/assets/adminsbs/js');
mix.copy('node_modules/adminbsb-materialdesign/plugins', 'public/assets/adminsbs/plugins');
mix.copy('node_modules/adminbsb-materialdesign/favicon.ico', 'public/assets/adminsbs');