import gulp from 'gulp'
import path from '../config/path.js'

export default function images() {
    return gulp.src(path.images.src)
    .pipe(gulp.dest(path.images.dest))
}