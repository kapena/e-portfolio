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

// Watch styles_proj2 and js_proj2 for changes
gulp.task('watch_proj2',function(){
    gulp.watch(paths.watcher_projects.watcher_proj2.styles_proj2,['proj2_styles']);
    gulp.watch(paths.watcher_projects.watcher_proj2.js_proj2,['proj2_js']);
});

// browserSync
gulp.task('sync',function(){
    // start browserSync
    browserSync.init({
        // Accessing paths.destination obj in config.json which contains html
        server: paths.project_pages_dest.proj2_dest.html
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

// prefixer and sourcemaps
gulp.task('autoprefix_proj1',['proj1_styles'],function () {
    del(['./site/css/main.css.map']);
    return gulp.src('./site/indiv_project_pages/proj1/css/proj2_main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['> 1%','last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.project_pages_dest.proj2_dest.styles_proj2));
});


// Styles task for proj1
gulp.task('proj2_styles',function(){
    // source to project 2 scss
    return gulp.src(paths.source.project_pgs_src.proj_2.styles_proj2)
    .pipe(plumber({
        // plumber finds errors in stream
        errorHandler: onError}))
    .pipe(sourcemaps.init()) // source maps
    .pipe(sass())
    .pipe(gulp.dest(paths.project_pages_dest.proj2_dest.styles_proj2))
    .pipe(cssmin()) // min css
    .pipe(rename({ // rename file to site.min.css
        suffix:'.min'
    }))
    // destination for compiled css for project 1
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.project_pages_dest.proj2_dest.styles_proj2))
    .pipe(notify({ message: 'proj2_styles task finished' }))
    .pipe(browserSync.stream());
});

// Script task for proj2
gulp.task('proj2_js',function(){
    return gulp.src(paths.source.project_pgs_src.proj_2.js_proj2)
    // find errors in stream then nofity me in terminal
    .pipe(plumber({errorHandler:onError}))
    .pipe(concat('proj2.js'))
    // .pipe(concat('site.js'))
    .pipe(gulp.dest(paths.project_pages_dest.proj2_dest.js_proj2))
    .pipe(uglify())
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(notify({ message: 'proj2_js task finished' }))
    .pipe(gulp.dest(paths.project_pages_dest.proj2_dest.js_proj2)),
    browserSync.reload();
});

gulp.task('project2',function(){
    // call runSequence to make sure our tasks are
    // perfromed in the correct order
    runSequence('proj2_styles','proj2_js','sync');
});
