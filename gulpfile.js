var gulp = require('gulp');
var plumber = require('gulp-plumber');

function onError(err) {
    console.log(err);
}

gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js/'))
        .pipe(plumber({
            errorHandler: onError
        }))
});

gulp.task('watch', function(){
    gulp.watch("src/js/**/*.js", ['js']);
});

gulp.task('default', ['js', 'watch']);
