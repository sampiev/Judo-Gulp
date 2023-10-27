import notify from 'gulp-notify'

const plumberSettings = {
        errorHandler: notify.onError(error => ({
        title: "CSS",
        message: error.message
    }))
}



export function css() {
    return global.gulp
    .src([
        global.path.src.css,
        'node_modules/normalize.css/normalize.css'
    ])
    .pipe(global.plugin.plumber(plumberSettings))
    .pipe(global.plugin.autoprefixer({
        overrideBrowserslist: ['last 10 versions'], grid: true
    }))
   
    .pipe(global.plugin.sass({
        // outputStyle: 'compressed'
    }).on('error', global.plugin.sass.logError))
    .pipe(global.plugin.concat('main.min.css'))
    .pipe(global.gulp.dest(global.path.dest.css))
    .pipe(global.plugin.browserSync.stream())
}
