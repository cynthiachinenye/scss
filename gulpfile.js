const {src, dest,watch,series}= require('gulp') 
const  purgecss  = require('gulp-purgecss')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('cynthia/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

function watchTask(){
    watch(['cynthia/**/*.scss'],buildStyles)
}

exports.default = series(buildStyles,watchTask)