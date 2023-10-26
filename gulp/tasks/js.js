import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import browserSync from 'browser-sync'
import babel from 'gulp-babel'
import path from '../config/path.js'



export default function js() {
    return gulp 
    .src(path.js.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message
        }))
    }))
    .pipe(concat('script.min.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(path.js.dest))
    .pipe(browserSync.stream())
}