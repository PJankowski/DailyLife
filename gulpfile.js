var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

var htmlFiles = [
  'public/index.html',
  'public/app/**/*.html'
];

gulp.task('sass', function(){
  gulp.src('public/sass/main.sass')
    .pipe(sass())
    .pipe(autoPrefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});

gulp.task('reload', function(){
  livereload();
});

gulp.task('watch', ['sass'], function () {
  livereload.listen();
  gulp.watch('public/sass/**/*.sass', ['sass']);
  gulp.watch(htmlFiles, function(){
    gulp.src(htmlFiles)
      .pipe(livereload());
  });
});

gulp.task('default', ['watch']);
