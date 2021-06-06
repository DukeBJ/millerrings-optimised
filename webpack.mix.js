let mix = require('laravel-mix');
require('laravel-mix-ejs');

mix.setPublicPath('dist')

mix.options({
  hmrOptions: {
      host: 'localhost',
      port: 3000
  }
});

mix.browserSync({
  server: {
      baseDir: 'dist',
      directory: false,
      index: 'index.html'
  },
  proxy: false,
  port: 3000,
  open: false,
  notify: false,
  files: ['src/**/*', 'dist/css/*']
})

// mix.browserSync('localhost:3000');

mix.copy('src/index.html', 'dist');
mix.copy('src/assets/images', 'dist/assets/images');
// mix.ejs('src/view/index.ejs','dist');
mix.js('src/assets/js/main.js', 'dist/assets/js').sass('src/assets/scss/main.scss', 'dist/assets/css');