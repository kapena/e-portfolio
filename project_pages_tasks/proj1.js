var gulp = require('gulp'),
plumber = require('gulp-plumber'), // prevent pipe breaking
rename = require('gulp-rename'), // rename file
sass = require('gulp-sass'), //css preprocesser
uglify = require('gulp-uglify'), // minify js
concat = require('gulp-concat'), // concat files
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

// Watch styles_proj1 and js_proj1 for changes
gulp.task('watch_proj1',function(){
    gulp.watch(paths.watcher_projects.watcher_proj1.styles_proj1,['proj1_styles']);
    gulp.watch(paths.watcher_projects.watcher_proj1.js_proj1,['proj1_js']);
});

// browserSync
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


// Styles task for proj1
gulp.task('proj1_styles',function(){
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
    .pipe(notify({ message: 'proj1_styles task finished' }))
    .pipe(browserSync.stream());
});


// Script task for proj1
gulp.task('proj1_js',function(){
    return gulp.src(paths.source.project_pgs_src.proj_1.js_proj1)
    // find errors in stream then nofity me in terminal
    .pipe(plumber({errorHandler:onError}))
    .pipe(concat('proj1.js'))
    // .pipe(concat('site.js'))
    .pipe(gulp.dest(paths.project_pages_dest.proj1_dest.js_proj1))
    .pipe(uglify())
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(notify({ message: 'proj1_js task finished' }))
    .pipe(gulp.dest(paths.project_pages_dest.proj1_dest.js_proj1)),
    browserSync.reload();
});

//default task
gulp.task('project1',function(){
    // call runSequence to make sure our tasks are
    // perfromed in the correct order
    runSequence('proj1_styles','proj1_js','sync');
});