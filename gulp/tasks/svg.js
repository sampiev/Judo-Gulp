
import gulp from 'gulp'
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

export default function svg () {
    return gulp.src('src/svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('app/svg'))
}