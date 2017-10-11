'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');

var DEST = './dist';

gulp.task('scripts', ['clean'],function () {
    return gulp.src('./src/*.js')
  //      .pipe(jslint())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST));
});

gulp.task('css', ['clean'],  function () {
    return gulp.src('./src/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest(DEST));
});



gulp.task('clean', function () {
    return gulp.src(DEST, {read: false}).pipe(clean());
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('angular-auto-complete.js', ['scripts']);
});

gulp.task('default', ['scripts', 'css']);