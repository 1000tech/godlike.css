var
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    sequence = require('run-sequence'),
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso'),
    rename = require("gulp-rename"),
    del = require("del"),
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
    watch('./*.styl', function() {
        gulp.start('css')
    });
});

// Clean old CSS
gulp.task('clean', function() {
    del('*.css')
});

// Main task
gulp.task('default', function(cb) {
    return sequence(
        'clean','watch','css','cssmin',
        cb);
});