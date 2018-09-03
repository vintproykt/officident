var gulp = require('gulp')
var svg2png = require('gulp-svg2png')

gulp.task('svg2png', function () {
	gulp.src('**/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('.'))
});

gulp.task('default', ['svg2png']);
