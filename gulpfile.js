import gulp from 'gulp'
import clean from './gulp/tasks/clean.js'
import html from './gulp/tasks/html.js'
import css from './gulp/tasks/css.js'
import js from './gulp/tasks/js.js'
import files from './gulp/tasks/files.js'
import fonts from './gulp/tasks/fonts.js'
import images from './gulp/tasks/images.js'
import svg from './gulp/tasks/svg.js'
import syncBrowser from './gulp/tasks/browsersync.js'
import path from './gulp/config/path.js'


export default function watcher () {
    gulp.watch([path.html.watch], html)
    gulp.watch([path.css.watch], css)
    gulp.watch([path.js.watch], js)
    gulp.watch([path.files.watch], files)
    gulp.watch([path.fonts.watch], fonts)
    gulp.watch([path.images.watch], images)
    gulp.watch([path.svg.watch], svg)
}


export { clean }
export { html }
export { css }
export { js }
export { files }
export { fonts }
export { images }
export { svg }
export { watcher }
export { syncBrowser }


export const devtask = gulp.series(clean, html, css, js, files, fonts, images, svg )
export const dev = gulp.parallel(watcher, syncBrowser)