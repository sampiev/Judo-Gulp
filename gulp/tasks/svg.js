
import svgSprite from 'gulp-svg-sprite'

const config = {
    mode: {
        css: { // Activate the «css» mode
          render: {
            css: true // Activate CSS output (with default options)
          }
        }
      }
  };

export function svg () {
    return global.gulp.src(global.path.src.svg)
    // .pipe(svgSprite(config))
    .pipe(global.gulp.dest(global.path.dest.svg))
}