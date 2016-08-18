var config = require('../config')
var gulp = require('gulp')

gulp.task('build-data', function () {
  return gulp.src(config.data.src)
    .pipe(gulp.dest(config.data.build))
})
