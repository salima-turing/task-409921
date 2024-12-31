const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es');

const paths = {
    src: 'src/**/*.js',
    dest: 'dist'
};

function optimizeScripts() {
    return gulp.src(paths.src)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dest));
}

function watchScripts() {
    gulp.watch(paths.src, optimizeScripts);
}

exports.default = optimizeScripts;
exports.watch = watchScripts;
