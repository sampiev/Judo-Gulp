
import notify from 'gulp-notify'

const plumberSettings = {
        errorHandler: notify.onError(error => ({
        title: "JS",
        message: error.message
    }))
}

const versionSettings = {
  'value': '%MDS%',
  'append': {
      'key': '_v',
      'cover': 0,
      'to': ['css', 'js'],
      'output': {
        'file': 'version.json'
      }
  }
}

const pugSettings = {
  pretty: true,
  verbose: false
}

export function html() {
  return global.gulp
  .src(global.path.src.html)
  .pipe(global.plugin.pug(pugSettings))
  .pipe(global.plugin.plumber(plumberSettings))
  .pipe(global.plugin.fileInclude())
  .pipe(global.plugin.version(versionSettings))
  .pipe(global.gulp.dest(global.path.app))
  .pipe(global.plugin.browserSync.stream())
}


