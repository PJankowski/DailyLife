var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    useref = require('gulp-useref'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if');

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

gulp.task('html', function(){
  gulp.src('public/index.html')
    .pipe(livereload());
});

gulp.task('watch', ['sass'], function () {
  livereload.listen();
  gulp.watch('public/sass/**/*.sass', ['sass']);
  gulp.watch(htmlFiles, ['html']);
});

gulp.task('default', ['watch']);

gulp.task('sass:build', function(){
  gulp.src('public/sass/main.sass')
    .pipe(sass())
    .pipe(autoPrefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('html:build', ['sass:build'], function(){
  gulp.src('public/index.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulp.dest('public'));
});

gulp.task('build', ['html:build']);
