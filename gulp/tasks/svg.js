
import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import path from '../config/path.js'

const config = {
    mode: {
        css: { // Activate the «css» mode
          render: {
            css: true // Activate CSS output (with default options)
          }
        }
      }
  };

export default function svg () {
    return gulp.src(path.svg.src)
    .pipe(svgSprite(config))
    .pipe(gulp.dest(path.svg.dest))
}