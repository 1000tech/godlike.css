var
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    sequence = require('run-sequence'),
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso'),
    rename = require("gulp-rename"),
    nib = require('nib');

// Compiling Stylus in CSS
gulp.task('css', function() {
    gulp.src('./*.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gulp.dest('./'))
});

// Compiling Stylus in CSS min
gulp.task('cssmin', function() {
    gulp.src('./*.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(csso())
        .pipe(rename('godlike.min.css'))
        .pipe(gulp.dest('./'))
});

// Watcher
gulp.task('watch', function() {
    watch('./*.styl', function() { gulp.start('css') });
});

gulp.task('default', function(cb) {
    sequence(
        'watch','css','cssmin',
        cb);
});