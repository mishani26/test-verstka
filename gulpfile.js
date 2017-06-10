var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('Images/sprites/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('Images/sprites/'));
});
gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('css/'));
})
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});
