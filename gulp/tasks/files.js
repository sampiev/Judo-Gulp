import gulp from 'gulp'
import path from '../config/path.js'

export default function files() {
    return gulp
        .src(path.files.src)
        .pipe(gulp.dest(path.files.dest))
}