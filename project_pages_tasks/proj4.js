var gulp = require('gulp'),
plumber = require('gulp-plumber'), // prevent pipe breaking
rename = require('gulp-rename'), // rename file
sass = require('gulp-sass'), //css preprocesser
uncss = require('gulp-uncss'), // uncss
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

// Watch styles_proj2 and js_proj2 for changes
gulp.task('watch_proj4',function(){
    gulp.watch(paths.watcher_projects.watcher_proj4.styles_proj4,['proj4_styles']);
    gulp.watch(paths.watcher_projects.watcher_proj4.js_proj4,['proj4_js']);
});

// browserSync
gulp.task('sync',function(){
    // start browserSync
    browserSync.init({
        // Accessing paths.destination obj in config.json which contains html
        server: paths.project_pages_dest.proj4_dest.html
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


// Styles task for proj1
gulp.task('proj4_styles',function(){
    // source to project 2 scss
    return gulp.src(paths.source.project_pgs_src.proj_4.styles_proj4)
    .pipe(plumber({
        // plumber finds errors in stream
        errorHandler: onError}))
    .pipe(sourcemaps.init()) // source maps
    .pipe(sass())
    .pipe(uncss({
        html:['site/idiv-proj-pgs/urb/urbanrevelation.html'],
        ignore:['.box_1','.box_2','.box_3','.box_4','.discript1','.discript2','.discript3','.discript4','.image-container','.img1','.img2']
    }))
    .pipe(gulp.dest(paths.project_pages_dest.proj4_dest.styles_proj4))
    .pipe(cssmin()) // min css
    .pipe(rename({ // rename file to site.min.css
        suffix:'.min'
    }))
    // destination for compiled css for project 1
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.project_pages_dest.proj4_dest.styles_proj4))
    .pipe(notify({ message: 'proj4_styles task finished' }))
    .pipe(browserSync.stream());
});

// Script task for proj3
gulp.task('proj4_js',function(){
    return gulp.src(paths.source.project_pgs_src.proj_4.js_proj4)
    // find errors in stream then nofity me in terminal
    .pipe(plumber({errorHandler:onError}))
    .pipe(concat('proj4.js'))
    // .pipe(concat('site.js'))
    .pipe(gulp.dest(paths.project_pages_dest.proj4_dest.js_proj4))
    .pipe(uglify())
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(notify({ message: 'proj4_js task finished' }))
    .pipe(gulp.dest(paths.project_pages_dest.proj4_dest.js_proj4)),
    browserSync.reload();
});

gulp.task('proj4',function(){
    // call runSequence to make sure our tasks are
    // perfromed in the correct order
    runSequence('proj4_styles','proj4_js','sync');
});
