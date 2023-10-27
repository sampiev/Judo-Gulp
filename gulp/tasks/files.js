
export const files = () => {
    return global.gulp
        .src(global.path.src.files)
        .pipe(global.gulp.dest(global.path.dest.files))
}