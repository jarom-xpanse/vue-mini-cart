const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/javascript/app.js', 'assets') 
   .sass('src/style/app.scss', 'assets')
   .options({
     processCssUrls: false,
     postCss: [ tailwindcss('tailwind.config.js') ],
   })
   .setPublicPath('assets');