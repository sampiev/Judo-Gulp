import gulp from 'gulp'
import fileInclude from 'gulp-file-include'
import plumber from 'gulp-plumber'
import notify from "gulp-notify"
import browserSync from 'browser-sync'
import path from '../config/path.js'


export default function html() {
  return gulp.src(path.html.src)
  .pipe(plumber({
      eerrorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message
      }))
  }))
  .pipe(fileInclude())
  .pipe(gulp.dest(path.html.dest))
  .pipe(browserSync.stream())
}


