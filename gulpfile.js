import gulp from 'gulp'
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import stylus from 'gulp-stylus'
import nib from 'nib'
import del from 'del'

// Compiling Stylus in CSS
export const css = () => {
    return gulp.src('./*.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gulp.dest('./'))
}

// Compiling Stylus in CSS min
export const cssmin = () => {
    return gulp.src('./*.styl')
        .pipe(stylus({
            use: nib()
        }))
        .pipe(csso())
        .pipe(rename('godlike.min.css'))
        .pipe(gulp.dest('./'))
}

// Clean old CSS
export const clean = () => del('*.css')

// Watcher
export const watch = () => {
    gulp.watch('./*.styl', gulp.series(css, cssmin))
}

// Main task
export default gulp.series(
    gulp.series(clean, css, cssmin)
)