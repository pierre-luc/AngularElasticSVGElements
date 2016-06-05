var gulp                = require( 'gulp' ),
    rename              = require( 'gulp-rename' ),     // Renommage des fichiers
    sass                = require( 'gulp-sass' ),       // Conversion des SCSS en CSS
    minifyCss           = require( 'gulp-minify-css' ), // Minification des CSS
    uglify              = require( 'gulp-uglify' ),     // Minification/Obfuscation des JS
    jshint              = require( 'gulp-jshint' ),
    concat              = require( 'gulp-concat' ),
    include             = require( "gulp-include" ),
    fileinclude         = require( 'gulp-file-include' ),
    insert              = require( 'gulp-insert' ),
    resolveDependencies = require( 'gulp-resolve-dependencies' ),
    replace             = require( 'gulp-replace'),
    plumber             = require( 'gulp-plumber' );    // Ne pas arrêter gulp en cas d'erreur

var nameOfProject = "elasticSVGElements";

gulp.task('js', function(){
    return gulp.src('src/js/**/*.js') // read all of the files that are in script/lib with a .js extension
        .pipe(resolveDependencies({
            pattern: /\* @requires [\s-]*(.*\.js)/g
        }))
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(jshint()) // run their contents through jshint
        .pipe(jshint.reporter('default')) // report any findings from jshint
        .pipe(concat( nameOfProject + '.js')) // concatenate all of the file contents into a file titled 'all.js'
        .pipe(fileinclude({
            prefix: '//@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/js')) // write that file to the dist/js directory
        .pipe(rename( nameOfProject + '.min.js')) // now rename the file in memory to 'all.min.js'
        .pipe(uglify({  // run uglify (for minification) on 'all.min.js'
            output: {
                comments: /^!|\b(copyright|license)\b|@(preserve|license|cc_on)\b/i
            }
        }))
        .pipe(gulp.dest('dist/js')); // write all.min.js to the dist/js file
});

// WATCH TASK
gulp.task( 'watch', function() {
    gulp.watch( './src/js/**/*.js', [ 'js' ] );
});

gulp.task( 'dist', [ 'js' ] );
gulp.task( 'default', [ 'watch', 'dist' ] );
