
export function server () {
    global.plugin.browserSync.init({
        server: {
            baseDir: global.path.app
        },
        notify: false,
        port: 3000,
        open: true,
    });
}