var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');

gulp.task('run', function() {
  return gulp.src([
      'app/a/a.js',
      'app/b/b.js'
    ])
    .pipe(named())
    .pipe(webpack())
    .pipe(gulp.dest('dist/a/'));
});