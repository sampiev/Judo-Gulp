import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import browserSync from 'browser-sync'



export default function js() {
    return gulp 
    .src('src/**/*.js')
    .pipe(plumber({
        errorHandler: notify.onError("error: <%= error.message %>")
    }))
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream())
}