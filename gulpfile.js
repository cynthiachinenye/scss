const {src, dest,watch,series}= require('gulp') 
const { default: gulpPurgeCSS } = require('gulp-purgecss')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('cynthia/**/*.scss')
    .pipe(sass())
    .pipe(gulpPurgeCSS({ contents: ['*.html'] }))
    .pipe(dest('css'))
}

function watchTask(){
    watch(['cynthia/**/*.scss'],buildStyles)
}

exports.default = series(buildStyles,watchTask)