var gulp = require('gulp'),
    sass = require('gulp-sass'),
    webpack = require('gulp-webpack');

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass({
      includePaths: ['bower_components/foundation-sites/scss']
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('js', function () {
  gulp.src('./src/scripts/*.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function () {
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./src/scripts/*.jsx', ['js']);
});
