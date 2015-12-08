var gulp = require('gulp'),
plumber = require('gulp-plumber'), // prevent pipe breaking
rename = require('gulp-rename'), // rename file
sass = require('gulp-sass'), //css preprocesser
uglify = require('gulp-uglify'), // minify js
browserSync = require('browser-sync').create(),
fs = require('fs'),
cssmin = require('gulp-minify-css'), // minify css
runSequence = require('run-sequence').use(gulp);

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

gulp.task('watch_proj1',function(){
    gulp.watch(paths.watcher_projects.watcher_proj1.styles_proj1,['proj1']);
});

gulp.task('sync',function(){
    // start browserSync
    browserSync.init({
        // Accessing paths.destination obj in config.json which contains html
        server: paths.project_pages_dest.proj1_dest.html
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


// Styles task for project page 1
gulp.task('proj1',function(){
    // source to project 1 scss
    return gulp.src(paths.source.project_pgs_src.proj_1.styles_proj1)
    .pipe(plumber({
        // plumber finds errors in stream
        errorHandler: onError}))
    .pipe(sass())
    .pipe(gulp.dest(paths.project_pages_dest.proj1_dest.styles_proj1))
    .pipe(cssmin()) // min css
    .pipe(rename({ // rename file to site.min.css
        suffix:'.min'
    }))
    // destination for compiled css for project 1
    .pipe(gulp.dest(paths.project_pages_dest.proj1_dest.styles_proj1))
    .pipe(notify({ message: 'PROJECT STYLES COMPLETE' }))
    .pipe(browserSync.stream());
});

// browserSync.watch('',function(event,file){
//
// });

//default task
gulp.task('project1',function(){
    // call runSequence to make sure our tasks are
    // perfromed in the correct order
    runSequence('proj1','sync');
});
