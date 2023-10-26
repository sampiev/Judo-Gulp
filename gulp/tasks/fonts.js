import gulp from 'gulp'
import path from '../config/path.js'

export default function fonts() {
    return gulp
        .src(path.fonts.src)
        .pipe(gulp.dest(path.fonts.dest))
}