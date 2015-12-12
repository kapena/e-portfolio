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
 runSequence = require('run-sequence').use(gulp), // runs gulp tasks in order
 sass = require('gulp-sass'), //css preprocesser
 uglify = require('gulp-uglify'),
 postcss = require('gulp-postcss'),
 sourcemaps = require('gulp-sourcemaps'),
 autoprefixer = require('autoprefixer'), // minify js
 requireDir = require('require-dir'),// allows me to use another directory for gulp tasks
 del= require ('del'); // delete

// Using project_pages_tasks to store seperate tasks that are apart of my build out
requireDir('./project_pages_tasks', {recurese:true});

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
        server: paths.main_dest.html
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

// watch main page js files
gulp.watch(paths.watcher_main.js_main,['js_main_task']);

// watch main page scss file
gulp.watch(paths.watcher_main.styles_main,['styles_main_task']);

// watch main page html
gulp.watch(paths.watcher_main.html,['reload']);

// reload browser on html or script adjustment
gulp.task('reload', function(){
    browserSync.reload();
});

// Scripts Main Task
gulp.task('js_main_task',function(){
    return gulp.src(paths.source.main_page_source.js_main)
    .pipe(plumber({errorHandler: onError}))
        // plumber finds errors in stream and
        // notifys me in terminal
    .pipe(concat('site.js')) // concating js files to main.js
    .pipe(gulp.dest(paths.main_dest.js_main)) // save in dest
    .pipe(uglify()) // minify js
    .pipe(rename({ // rename with file with .min
        suffix:'.min'
    }))
    .pipe(gulp.dest(paths.main_dest.js_main))
    .pipe(notify({ message: 'js_main task finished'})),
    browserSync.reload();
});

// Styles Main
gulp.task('styles_main_task',function(){
    return gulp.src(paths.source.main_page_source.styles_main)
        .pipe(plumber({
            // plumber finds errors in stream
            errorHandler: onError}))
        .pipe(sourcemaps.init()) // source maps
        .pipe(postcss([ autoprefixer({ browsers: ['> 1%','last 2 versions'] }) ]))
        .pipe(sass())
        .pipe(gulp.dest(paths.main_dest.styles_main))
        .pipe(cssmin()) // min css
        .pipe(rename({ // rename file to site.min.css
            suffix:'.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.main_dest.styles_main))
        .pipe(notify({ message: 'styles_main_task finished' }))
        .pipe(browserSync.stream({match:'**/*.css'}));
});

//default task
gulp.task('main',function(){
    // call runSequence to make sure our tasks are
    // perfromed in the correct order
    runSequence('js_main_task','styles_main_task','sync');
});
