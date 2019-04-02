/**
 * @name            sass-footer
 * @file            gulpfile.js
 * @version         1.0.0
 * @description     Creating Footer With SASS
 * @repository      https://github.com/oztasemrecan/sass-footer
 * @author          Emre Can ÖZTAŞ (ecoztas) <me@emrecanoztas.com>
 * @license         MIT
 */

// DEFINE: Package(s).
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

// TASK: Default
gulp.task('default', function() {
    console.log('Works fine!');
});

// TASK: LESS
gulp.task('sass', function() {
    return (
        gulp.src('footer.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./'))
    );
});
