import gulp from 'gulp'

export default function images() {
    return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('app/images'))
}