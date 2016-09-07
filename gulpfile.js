var
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	sequence = require('run-sequence'),
	stylus = require('gulp-stylus'),
   csso = require('gulp-csso'),
   cmq = require('gulp-combine-mq'),
   autoprefixer = require('gulp-autoprefixer'),
	nib = require('nib');

// Compiling Stylus in CSS
gulp.task('css', function() {
	gulp.src('./*.styl')
		.pipe(stylus({
			use: nib()
		}))
		.pipe(cmq())
		.pipe(gulp.dest('./'))
});
// Compiling Stylus in CSS min
gulp.task('cssmin', function() {
	gulp.src('./*.styl')
		.pipe(stylus({
			use: nib()
		}))
		.pipe(cmq())
		.pipe(csso())
		.pipe(gulp.dest('./godlike.min'))
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