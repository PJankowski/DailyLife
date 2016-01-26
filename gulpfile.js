var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('public/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});
