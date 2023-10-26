const sourcePath = './src'
const destinationPath = './dev'
const resultPath = 'dev/'

export default {
    
    root: sourcePath,

    dev: {
        clean: resultPath,
        server: resultPath
    },

    html: {
        src: sourcePath + '/html/**/*.html',
        watch: sourcePath + '/**/*.html',
        dest: destinationPath
    },

    css: {
        src: sourcePath + '/**/*.scss',
        watch: sourcePath + '/**/*.scss',
        dest: destinationPath + '/css'
    },

    js: {
        src: sourcePath + '/**/*.js',
        watch: sourcePath + '/**/*.js',
        dest: destinationPath + '/js'
    },

    files: {
        src: sourcePath + '/files/**/*.*',
        watch: sourcePath + '/files/**/*.*',
        dest: destinationPath + '/files'
    },

    fonts: {
        src: sourcePath + '/fonts/**/*.*',
        watch: sourcePath + '/fonts/**/*.*',
        dest: destinationPath + '/fonts'
    },

    images: {
        src: sourcePath + '/images/**/*.*',
        watch: sourcePath + '/images/**/*.*',
        dest: destinationPath + '/images'
    },

    svg: {
        src: sourcePath + '/svg/**/*.svg',
        watch: sourcePath + '/svg/**/*.svg',
        dest: destinationPath + '/svg'
    },


}

