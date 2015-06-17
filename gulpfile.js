var gulp = require('gulp');
var colors = require('colors');
var jadeCompiler = require('gulp-jade');
var sassCompiler = require('gulp-sass');

gulp.task('default', function() {
    // place code for your default task here
    console.log('This task does nothing');
});

/*
 * Compile jade files into html files
 */
gulp.task('compile-jade', function() {
    // find all *.jade files in folder and subfolder
    var jadeSrc = "./app/template/**/*.jade"; 
    var output = "./app/views";

    return gulp.src(jadeSrc)
        .pipe(jadeCompiler())
        .pipe(gulp.dest(output));
});

/*
 * Compile scss files to css
 */
gulp.task('compile-scss', function () {
    var scssSrc = "./app/stylesheets/scss/**/*.scss";
    var output = "./app/stylesheets/css";
    return gulp.src(scssSrc)
            .pipe(sassCompiler().on('error', sassCompiler.logError))
            .pipe(gulp.dest(output));
});


/*
 * Combine all the tasks above
 */
gulp.task('build', ['compile-jade', 'compile-scss'], function() {
    var output = './app/views/';
    console.log(colors.green('\nBuild completed! Result is in ' + output + '\n'));
    return true;
});
