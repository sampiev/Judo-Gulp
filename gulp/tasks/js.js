
import notify from 'gulp-notify'

const plumberSettings = {
        errorHandler: notify.onError(error => ({
        title: "JS",
        message: error.message
    }))
}

export function js() {
    return global.gulp 
    .src(global.path.src.js)
    .pipe(global.plugin.plumber(plumberSettings))
    .pipe(global.plugin.concat('script.min.js'))
    .pipe(global.plugin.babel())
    // .pipe(global.plugin.uglify())
    .pipe(global.gulp.dest(global.path.dest.js))
    .pipe(global.plugin.browserSync.stream())
}