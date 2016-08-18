var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	runSequence(['styles', 'eslint'], 'browserSync', 'watch');
});

gulp.task('build', function(done) {
	runSequence(['styles', 'eslint'], 'build-clean', ['build-useref', 'build-views', 'build-data', 'build-fonts', 'build-images'], ['build-styles', 'build-scripts'], function() {
		// Fixes the problem of finishing 'build task' too early
		done();
	});
});