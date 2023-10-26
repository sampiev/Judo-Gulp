import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import concat from 'gulp-concat'
import autoprefixer from 'gulp-autoprefixer'
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import browserSync from 'browser-sync'
import path from '../config/path.js'


export default function css() {
    return gulp
    .src([
        path.css.src,
        'node_modules/normalize.css/normalize.css'
    ])
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "CSS",
            message: error.message
        }))
    }))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 versions'], grid: true
    }))
    .pipe(concat('main.min.css'))
    .pipe(sass({
        // outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(path.css.dest))
    .pipe(browserSync.stream())
}