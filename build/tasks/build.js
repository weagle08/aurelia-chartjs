/**
 * Created by ben on 8/24/2015.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compileOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');

gulp.task('build-system', function(){
	return gulp.src([paths.source, '!' + paths.jspm, '!' + paths.config])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(changed(paths.output, {extension: '.js'}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(babel(assign({}, compileOptions, {modules: 'system'})))
		.pipe(sourcemaps.write({includeContent: true}))
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-html', function(){
	return gulp.src([paths.html, '!' + paths.jspm])
		.pipe(changed(paths.output, {extension: '.html'}))
		.pipe(gulp.dest(paths.output));
});

gulp.task('build', function(callback){
	return runSequence(
		'clean',
		['build-system', 'build-html'],
		callback
	);
});