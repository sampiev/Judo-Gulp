import gulp from 'gulp'
import gulpclean from 'gulp-clean'
import fs from 'fs'
import path from '../config/path.js'

export default function clean (done) {

    if (fs.existsSync(path.dev.clean)) {
        return gulp.src(path.dev.clean)
        .pipe(gulpclean());
    }
    else {
        done()
    }
}