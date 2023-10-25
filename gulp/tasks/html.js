import gulp from 'gulp'
import fileInclude from 'gulp-file-include'
import plumber from 'gulp-plumber'
import notify from "gulp-notify"
import browserSync from 'browser-sync'


export default function html() {
  return gulp.src('./src/html/*.html')
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(fileInclude())
  .pipe(gulp.dest('app/'))
  .pipe(browserSync.stream())
}


