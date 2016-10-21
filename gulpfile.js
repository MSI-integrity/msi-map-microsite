var gulp = require('gulp'),
    jeditor = require("gulp-json-editor"),
    jsonminify = require('gulp-jsonminify'),
    sass = require('gulp-sass'),
    webpack = require('gulp-webpack'),
    cleanCSS = require('gulp-clean-css'),
    minify = require('gulp-minify'),
    rename = require("gulp-rename"),
    buildIndex = require('./build_index.js');

gulp.task('sass', function () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass({
      includePaths: [
        'bower_components/foundation-sites/scss',
        'node_modules/slick-carousel/slick'
      ]
    }))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/'));
});

gulp.task('js', function () {
  gulp.src('./src/scripts/*.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    // .pipe(minify({
    //   ext: {
    //       src:'-debug.js',
    //       min:'.js'
    //   }
    // }))
    .pipe(gulp.dest('./build'));
});

gulp.task('bower-components', function () {
  gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
  ], {base: 'bower_components/'})
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./build/vendor'));
});

gulp.task('html', function () {
  gulp.src('./src/html/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('index', function () {
  gulp.src('./data/data.json')
    .pipe(jeditor(buildIndex))
    .pipe(jsonminify())
    .pipe(rename('indexed_data.json'))
    .pipe(gulp.dest('./build/data'));
});

gulp.task('data', function () {
  gulp.src('./data/*.{json,xslx}')
    .pipe(gulp.dest('./build/data'));
});

gulp.task('images', function () {
  gulp.src('./images/**/*.{png,jpg,ico}')
    .pipe(gulp.dest('./build/images'));
});

gulp.task('fonts', function () {
  gulp.src('./node_modules/slick-carousel/slick/fonts/*')
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('build', ['bower-components', 'sass', 'js', 'html', 'index', 'data', 'images', 'fonts']);

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/scripts/*.jsx', ['js']);
    gulp.watch('./src/html/index.html', ['html']);
});

gulp.task('default', ['build']);
