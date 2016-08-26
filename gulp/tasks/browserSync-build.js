var config = require('../config')
var gulp = require('gulp')
var browserSync = require('browser-sync').create()

gulp.task('browserSync-build', function () {
  browserSync.init({
    server: {
      baseDir: config.buildDir
    }
  })
})
