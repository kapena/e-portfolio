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

var notify = require('gulp-notify');
var beep = require('beepbeep');

// error handeler function
var onError = function(err){
    notify.onError({
        title:    "Task Error",
        message:  "<%= error.message %>",
        sound:    "Sosumi"
    })(err);
    this.emit('end');
};

// watch js files
gulp.watch(paths.watch.js,['scripts']);
// watch scss files
gulp.watch(paths.watch.styles,['styles']);
// watch html
gulp.watch(paths.watch.html,['reload']);

// reload browser
gulp.task('reload', function(){
    browserSync.reload();
});

// Scripts Task
gulp.task('scripts',function(){
    return gulp.src(paths.source.js)
    .pipe(plumber({errorHandler: onError}))
        // plumber finds errors in stream and
        // notifys me in terminal
    .pipe(concat('site.js')) // concating js files to main.js
    .pipe(gulp.dest(paths.destination.js)) // save in dest
    .pipe(uglify()) // minify js
    .pipe(rename({ // rename with file with .min
        suffix:'.min'
    }))
    .pipe(gulp.dest(paths.destination.js)),
    browserSync.reload();
});

// prefixer task containing a watch task for autoprefixer
gulp.task('prefixer',function(){
    gulp.watch('./site/css/main.css',['autoprefixer']);
});

gulp.task('autoprefixer',function () {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
    return gulp.src('./site/css/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['> 1%','last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./site/css'));
});

// Styles Task
gulp.task('styles',function(){
    return gulp.src(paths.source.styles)
        .pipe(plumber({
            // plumber finds errors in stream
            errorHandler: onError}))
        .pipe(sass())
        .pipe(gulp.dest(paths.destination.styles))
        .pipe(cssmin()) // min css
        .pipe(rename({ // rename file to site.min.css
            suffix:'.min'
        }))
        .pipe(gulp.dest(paths.destination.styles))
        .pipe(notify({ message: 'Styles task complete' }))
        .pipe(browserSync.stream());

});

//default task
gulp.task('default',function(){
    // call runSequence to make sure our tasks are
    // perfromed in the correct order
    runSequence('scripts', 'styles','prefixer','sync');
});
