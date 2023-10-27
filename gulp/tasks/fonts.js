
export const fonts = () => {
    return global.gulp
        .src(global.path.src.fonts)
        .pipe(global.gulp.dest(global.path.dest.fonts))
}