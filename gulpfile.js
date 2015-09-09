// packages installed
var gulp = require('gulp'),
 fs = require('fs'),
 gulpif = require('gulp-if'), // condtionally run task
 plumber = require('gulp-plumber'), // prevent pipe breaking
 browserSync = require('browser-sync').create(),
 bower = require('gulp-bower'), // gulp bower
 concat = require('gulp-concat'), // concat files
 cssmin = require('gulp-minify-css'), // minify css
 rename = require('gulp-rename'), // rename file
 runSequence = require('run-sequence'), // runs gulp tasks in order
 sass = require('gulp-sass'), // css preprocessor
 uglify = require('gulp-uglify'); // minify js

// Accessing config.json to get paths to files
function setVars () {
    // config.json file
    configFile = 'config.json';
    // parse strings from config.json to object
    configJSON = JSON.parse(fs.readFileSync(configFile));
    // Accessing paths object in config.json
    paths = configJSON.paths;
    // how long error message will pop up
    errorTimeout = 1000;
}
// call setVars
setVars();

// Tasks

// bower
gulp.task('bower',function(){
    // runs bower install
    return bower();
});

// install bower, run build and start browser-sync
gulp.task('install', function(){
    // runSequence waits for one task to complete then b4 moving to the next task.
    // notice here `install` makes a callback to the `bower` function
    runSequence('bower','install');
});

// start up browserSync
gulp.task('sync',function(){
    // start browserSync
    browserSync.init({
        // Accessing paths.destination obj in config.json which contains html
        server: paths.destination.html
    });
});

// watch js files
gulp.watch(paths.watch.js,['scripts']);
// watch css files
gulp.watch(paths.watch.styles,['styles']);
// watch html
gulp.watch(paths.watch.html,['reload']);

// reload browser
gulp.task('reload', function(){
    browserSync.reload();
});

// Scripts Task
gulp.task('scripts',function(){
    // stream error
    var streamError = false;
    return gulp.src(paths.source.js)
    .pipe(plumber({
        // plumber finds errors in stream and
        // notifys me in the brower
        errorHandeler:function(error){
            streamError = error;
            this.emit('end');
        }
    }))
    .pipe(concat('site.js')) // concating js files to main.js
    .pipe(gulp.dest(paths.destination.js)) // save in dest
    .pipe(uglify()) // minify
    .pipe(rename({ // rename with .min
        suffix:'.min'
    }))
    .pipe(gulp.dest(paths.destination.js)) // dest
    .on('end',function(){
        // if there is a streamError then log to console
        if(streamError){
            console.log(streamError.message);
            // browserSync notify's browser
            // when errors occur
            browserSync.notify(streamError.message,errorTimeout);
        }else{
            // reload browser
            browserSync.reload();
        }
    });
});

// Styles Task
gulp.task('styles', function(){

    // to use autoprefixer I need postcss
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    // streamError is set to false
    var streamError = false;
    return gulp.src(paths.source.styles)
        .pipe(plumber({
            // plumber finds errors in stream
            errorHandeler:function(error){
                streamError = error;
                // plumber logs errors to console
                console.log(streamError.message);
                browserSync.notify(streamError.message,errorTimeout);
                this.emit('end');
            }
        }))
        .pipe(sass()) // compile sass
        .pipe(rename('site.css')) // rename css file
        .pipe(gulp.dest(paths.destination.styles))
        // if the streamError is NOT false reload brower
        .pipe(gulpif(!streamError,browserSync.reload({stream:true})))
        .pipe(cssmin()) // min css
        .pipe(rename({ // rename file to site.min.css
            suffix:'.min'
        }))
        .pipe(gulp.dest(paths.destination.styles))
        // if streamError is not `false` reload browser
        .pipe(gulpif(!streamError,browserSync.reload({stream:true})))
        // autoprefixer and source maps
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.destination.styles));
});

// default task
gulp.task('default',function(){
    // call runSequence to make sure our tasks are
    // perfromed in the correct order
    runSequence('scripts', 'styles' ,'sync');
});
