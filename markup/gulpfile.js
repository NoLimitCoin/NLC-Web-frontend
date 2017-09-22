/* global require */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var path = require('path');
var data = require('gulp-data');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

/* Change your directory and settings here */
var settings = {
    publicDir: '_dist',
    sassDir: '_scss',
    layoutDir: '_layouts',
    partialsDir: '_layouts/_partials',
    dataDir: '_layouts/_data',
    cssDir: '_dist/assets/css',
    /* change to disable system notification */
    systemNotify: true
}

/**
 * serve task, will launch browserSync and launch index.html files,
 * and watch the changes for jade and sass files.
 **/
gulp.task('serve', ['sass'], function() {

    /**
     * Launch BrowserSync from publicDir
     */
    browserSync.init({
        server: settings.publicDir
    });

    /**
     * watch for changes in sass files 
     */
    gulp.watch(settings.sassDir + "/*.scss", ['sass']);

    /**
     * watch for changes in jade files 
     */
    gulp.watch([settings.layoutDir + "/*.jade", settings.partialsDir + "/*.jade", settings.dataDir + "/*.jade.json"], ['jade']);

});

/**
 * sass task, will compile the .SCSS files,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('sass', function() {
    return gulp.src(settings.sassDir + "/*.scss")
        .pipe(plumber({
            errorHandler: settings.systemNotify ? notify.onError("Error: <%= error.messageOriginal %>") : function(err) {
                console.log(" ************** \n " + err.messageOriginal + "\n ************** ");
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: '*'
        }))
        .pipe(gulp.dest(settings.cssDir))
        .pipe(browserSync.stream());
});

/**
 * Jade task, will compile the Jade,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('jade', function() {
    return gulp.src(settings.layoutDir + "/*.jade")
        .pipe(data(function (file) {
            return require('./_layouts/_data/' + path.basename(file.path) + '.json');
        }))
        .pipe(plumber({
            errorHandler: settings.systemNotify ? notify.onError("Error: <%= error %>") : function(err) {
                console.log("************** \n " + err + "\n **************");
                this.emit('end');
            }
        }))
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(settings.publicDir))
        .pipe(browserSync.stream());
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['serve']);
