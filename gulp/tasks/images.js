
export function images() {
    return global.gulp
    .src(global.path.src.images)
    .pipe(global.gulp.dest(global.path.dest.images))
}