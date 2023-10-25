import browserSync from 'browser-sync'

export default function syncBrowser () {
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        notify: false,
        port: 3000,
        open: false,
    });
}