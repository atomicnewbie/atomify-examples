var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('default', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
     entries: './app.js',
     ignoreMissing: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./atomic/Resources/Scripts'));
});
