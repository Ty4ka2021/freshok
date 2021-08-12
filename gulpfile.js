const { src, dest, watch, parallel, series } = require('gulp');

const scss         = require('gulp-sass');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const ssi  = require('browsersync-ssi');
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const replace = require('gulp-replace');
const cheerio = require('gulp-cheerio');
const sprite = require('gulp-svg-sprite');
const del          = require('del');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/',
            middleware: ssi({baseDir: 'app/', ext: '.html'}),
        },
    });
}

function cleanDist() {
    return del('dist')
}

function images() {
    return src('app/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('dist/images'))
}

function svgSprite() {
  return src('app/images/sprite/*.svg')
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {
        xmlMode: true
      }
    }))

    .pipe(replace('&gt;', '>'))

    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))

    .pipe(dest('app/images'));
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'app/js/main.js',

  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src([
    'app/scss/style.scss',
    'node_modules/slick-carousel/slick/slick.scss',
    // 'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
  ])
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function build (){
    return src ([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
    watch(['app/images/sprite/*.svg'], svgSprite);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.svgSprite = svgSprite ;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, svgSprite, browsersync, watching);