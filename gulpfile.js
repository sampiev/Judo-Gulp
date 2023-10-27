
//Plugins
import gulp from 'gulp'

//Configs
import { path } from './gulp/config/path.js'
import { plugin } from './gulp/config/plugins.js'


//Tasks
import { html } from './gulp/tasks/html.js'
import { css } from './gulp/tasks/css.js'
import { js } from './gulp/tasks/js.js'
import { files } from './gulp/tasks/files.js'
import { fonts } from './gulp/tasks/fonts.js'
import { images } from './gulp/tasks/images.js'
import { clean } from './gulp/tasks/clean.js'
import { server } from './gulp/tasks/server.js'
import { svg } from './gulp/tasks/svg.js'

//Global var
global.global = {
    gulp: gulp,
    path: path,
    plugin: plugin,
    
}



//Wathcing changes
function watcher() {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.css, css)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.files, files)
    gulp.watch(path.watch.fonts, fonts)
    // gulp.watch(path.watch.images, js)
    // gulp.watch(path.watch.svg, svg)
}


//Tasks for checking
gulp.task('html', html)
gulp.task('css', css)
gulp.task('js', js)
gulp.task('files', files)
gulp.task('fonts', fonts)
gulp.task('images', images)
gulp.task('svg', svg)
gulp.task('clean', clean)
gulp.task('server', server)
gulp.task('watcher', watcher)



export const dev = gulp.series(clean, html, css, js, files, fonts, gulp.parallel(watcher,server))











// import gulp from 'gulp'
// import clean from './gulp/tasks/clean.js'
// import html from './gulp/tasks/html.js'
// import css from './gulp/tasks/css.js'
// import js from './gulp/tasks/js.js'
// import files from './gulp/tasks/files.js'
// import fonts from './gulp/tasks/fonts.js'
// import images from './gulp/tasks/images.js'
// import svg from './gulp/tasks/svg.js'
// import syncBrowser from './gulp/tasks/browsersync.js'
// import path from './gulp/config/path.js'


// export default function watcher () {
//     gulp.watch([path.html.watch], html)
//     gulp.watch([path.css.watch], css)
//     gulp.watch([path.js.watch], js)
//     gulp.watch([path.files.watch], files)
//     gulp.watch([path.fonts.watch], fonts)
//     gulp.watch([path.images.watch], images)
//     gulp.watch([path.svg.watch], svg)
// }


// export { clean }
// export { html }
// export { css }
// export { js }
// export { files }
// export { fonts }
// export { images }
// export { svg }
// export { watcher }
// export { syncBrowser }


// export const devtask = gulp.series(clean, html, css, js, files, fonts, images, svg )
// export const dev = gulp.parallel(watcher, syncBrowser)