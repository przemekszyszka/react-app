var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream'),
    livereload = require('gulp-livereload');

gulp.task('build', function () {
  browserify({
    entries: 'src/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist'))
  .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('src/*.jsx', ['build']);
})


gulp.task('default', ['build', 'watch']);
