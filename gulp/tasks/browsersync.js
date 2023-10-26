import browserSync from 'browser-sync'
import path from '../config/path.js'

export default function syncBrowser () {
    browserSync.init({
        server: {
            baseDir: path.dev.server
        },
        notify: false,
        port: 3000,
        open: true,
    });
}