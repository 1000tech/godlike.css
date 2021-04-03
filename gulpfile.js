const
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: '*'
    })

// Compiling Stylus in CSS
gulp.task('css', () => {
    return gulp.src('./*.styl')
        .pipe($.stylus({
            use: $.nib()
        }))
        .pipe(gulp.dest('./'))
})

// Compiling Stylus in CSS min
gulp.task('cssmin', () => {
    return gulp.src('./*.styl')
        .pipe($.stylus({
            use: $.nib()
        }))
        .pipe($.csso())
        .pipe($.rename('godlike.min.css'))
        .pipe(gulp.dest('./'))
})

// Clean old CSS
gulp.task('clean', () => $.del('*.css'))

// Watcher
gulp.task('watch', () => {
    gulp.watch('./*.styl', gulp.series('css','cssmin'))
})

// Main task
gulp.task('default', gulp.series(
    gulp.series('clean','css','cssmin','watch')
))