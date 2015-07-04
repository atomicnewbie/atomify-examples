var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('atomify', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
     entries: './app.js',
     ignoreMissing: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/Resources/Scripts'));
});

gulp.task('copy-files', function() {
  return gulp.src(['atomic/**/*']).pipe(gulp.dest('build'));
});


gulp.task('default', ['copy-files', 'atomify']);
