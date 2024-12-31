// gulpfile.js
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const watch = require('gulp-watch');

// Define the source and destination directories
const paths = {
    scripts: {
        src: 'src/js/**/*.js', // Adjust the pattern according to your project structure
        dest: 'dist/js/'
    }
};

// Create a Gulp task to optimize and compress JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init()) // Initialize sourcemaps before other transformations
        .pipe(concat('bundle.js')) // Concatenate all JavaScript files
        .pipe(uglify()) // Minify the concatenated file
        .pipe(rename({ suffix: '.min' })) // Rename the output file
        .pipe(sourcemaps.write('.')) // Write sourcemaps to the same directory
        .pipe(gulp.dest(paths.scripts.dest)); // Save the output file
}

// Create a watch task to monitor changes in JavaScript files
function watchFiles() {
    gulp.watch(paths.scripts.src, scripts); // Run scripts task when JavaScript files change
}

// Define the default Gulp task
const build = gulp.series(scripts); // Allows you to run gulp build to trigger the scripts task
gulp.task('default', gulp.series(build, watchFiles)); // By default, run the build and watch tasks
