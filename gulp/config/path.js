const sourcePath = './src'
const destinationPath = './app'

export const path = {

    app: destinationPath,

    src: {
        html: [sourcePath + '/html/*.pug', sourcePath + '/html/*.html'],
        css: sourcePath + '/**/*.scss',
        js: sourcePath + '/**/*.js',
        files: sourcePath + '/files/**/*.*',
        fonts: sourcePath + '/fonts/**/*.*',
        images: sourcePath + '/images/**/*.*',
        svg: sourcePath + '/svg/**/*.svg',
    },

    dest: {
        html: destinationPath, 
        css: destinationPath + '/css',
        js: destinationPath + '/js',
        files: destinationPath + '/files',
        fonts: destinationPath + '/fonts',
        images: destinationPath + '/images',
        svg: destinationPath + '/svg',
    },

    watch: {
        html: [sourcePath + '/html/**/*.pug', sourcePath + '/html/**/*.html'],
        css: sourcePath + '/**/*.scss',
        js: sourcePath + '/**/*.js',
        files: sourcePath + '/files/**/*.*',
        fonts: sourcePath + '/fonts/**/*.*',
        images: sourcePath + '/images/**/*.*',
        images: sourcePath + '/svg/**/*.svg',
    },
}
