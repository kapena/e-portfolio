var gulp = require('gulp'),
plumber = require('gulp-plumber'), // prevent pipe breaking
rename = require('gulp-rename'), // rename file
sass = require('gulp-sass'), //css preprocesser
uglify = require('gulp-uglify'), // minify js
concat = require('gulp-concat'), // concat files
browserSync = require('browser-sync').create(),
fs = require('fs'),
cssmin = require('gulp-minify-css'), // minify css
runSequence = require('run-sequence').use(gulp),
notify = require('gulp-notify'),
postcss = require('gulp-postcss'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('autoprefixer'),
del= require ('del'), // delete
beep = require('beepbeep');

// Accessing config.json to get paths to files
function setVars () {
    // config.json file
    configFile = 'config.json';
    // parse strings from config.json to object
    configJSON = JSON.parse(fs.readFileSync(configFile));
    // Accessing paths object in config.json
    paths = configJSON.paths;
    errorTimeout = 1000;
}
setVars();

// Watch styles_proj8 and js_proj8 for changes
gulp.task('watch_proj8',function(){
    gulp.watch(paths.watcher_projects.watcher_proj8.styles_proj8,['proj8_styles']);
    gulp.watch(paths.watcher_projects.watcher_proj8.js_proj8,['proj8_js']);
});

// browserSync
gulp.task('sync',function(){
    // start browserSync
    browserSync.init({
        // Accessing paths.destination obj in config.json which contains html
        server: paths.project_pages_dest.proj8_dest.html
    });
});


// Displays errors in nofitication format
var onError = function(err){
    notify.onError({
        title:    "Task Error",
        message:  "<%= error.message %>",
        sound:    "Sosumi"
    })(err);
    this.emit('end');
};

// Styles task for proj8
gulp.task('proj8_styles',function(){
    // source to project 2 scss
    return gulp.src(paths.source.project_pgs_src.proj_8.styles_proj8)
    .pipe(plumber({
        // plumber finds errors in stream
        errorHandler: onError}))
    .pipe(sourcemaps.init()) // source maps
    .pipe(sass())
    .pipe(gulp.dest(paths.project_pages_dest.proj8_dest.styles_proj8))
    .pipe(cssmin()) // min css
    .pipe(rename({ // rename file to site.min.css
        suffix:'.min'
    }))
    // destination for compiled css for project 1
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.project_pages_dest.proj8_dest.styles_proj8))
    .pipe(notify({ message: 'proj8_styles task finished' }))
    .pipe(browserSync.stream());
});

// Script task for proj8
gulp.task('proj8_js',function(){
    return gulp.src(paths.source.project_pgs_src.proj_8.js_proj8)
    // find errors in stream then nofity me in terminal
    .pipe(plumber({errorHandler:onError}))
    .pipe(concat('proj8.js'))
    // .pipe(concat('site.js'))
    .pipe(gulp.dest(paths.project_pages_dest.proj8_dest.js_proj8))
    .pipe(uglify())
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(notify({ message: 'proj8_js task finished' }))
    .pipe(gulp.dest(paths.project_pages_dest.proj8_dest.js_proj8)),
    browserSync.reload();
});

gulp.task('project8',function(){
    // call runSequence to make sure our tasks are
    // perfromed in the correct order
    runSequence('proj8_styles','proj8_js','sync');
});
