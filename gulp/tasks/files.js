import gulp from 'gulp'

export default function files() {
    return gulp.src('src/files/**/*.*')
    .pipe(gulp.dest('app/files'))
}