
export function clean (done) {

    if (global.plugin.fs.existsSync(global.path.app)) {
        return global.gulp
        .src(global.path.app)
        .pipe(global.plugin.clean());
    }
    else {
        done()
    }
}