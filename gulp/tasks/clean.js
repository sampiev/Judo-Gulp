import gulp from 'gulp'
import gulpclean from 'gulp-clean'
import fs from 'fs'

export default function clean (done) {

    if (fs.existsSync('app/')) {
        return gulp.src('app/')
        .pipe(gulpclean());
    }
    else {
        done()
    }
}