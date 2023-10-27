

//Commom
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import concat from 'gulp-concat'
import browserSync from 'browser-sync'
import clean from 'gulp-clean'
import replace from 'gulp-replace'
import fs from 'fs'

//css
import autoprefixer from 'gulp-autoprefixer'
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

//html
import fileInclude from 'gulp-file-include'
import pug from 'gulp-pug'
import version from 'gulp-version-number'

//js
import uglify from 'gulp-uglify'
import babel from 'gulp-babel'



export const plugin = {
    plumber: plumber,
    autoprefixer: autoprefixer,
    concat: concat,
    sass: sass,
    browserSync: browserSync,
    clean: clean,
    fs: fs,
    replace: replace,
    fileInclude: fileInclude,
    version: version,
    uglify: uglify,
    babel: babel,
    notify: notify,
    pug: pug
}