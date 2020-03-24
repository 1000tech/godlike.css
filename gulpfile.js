var
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: '*'
    });

// Compiling Stylus in CSS
gulp.task('css', function() {
    return gulp.src('./*.styl')
        .pipe($.stylus({
            use: $.nib()
        }))
        .pipe(gulp.dest('./'))
});

// Compiling Stylus in CSS min
gulp.task('cssmin', function() {
    return gulp.src('./*.styl')
        .pipe($.stylus({
            use: $.nib()
        }))
        .pipe($.csso())
        .pipe($.rename('godlike.min.css'))
        .pipe(gulp.dest('./'))
});

// Clean old CSS
gulp.task('clean', function() {
    return $.del('*.css')
});

// Watcher
gulp.task('watch', function() {
    gulp.watch('./*.styl', gulp.series('css'));
});

// Main task
gulp.task('default', gulp.series(
    gulp.series('clean','css','cssmin','watch')
));