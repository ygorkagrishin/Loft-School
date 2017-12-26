'use strict';

var gulp = require( 'gulp' );
var pug = require( 'gulp-pug' );
var styl = require( 'gulp-stylus' );
var sourcemaps = require('gulp-sourcemaps');
var vender = require( 'gulp-autoprefixer' );
var plumber = require( 'gulp-plumber' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var tinypng = require( 'gulp-tinypng-compress' );

gulp.task( 'pug', function () {

    return gulp.src( 'src/pug/page/*.pug' )
               .pipe( pug( { pretty: true } ) )
               .pipe( gulp.dest( 'build' ) );

});

gulp.task( 'stylus', function () {

    return gulp.src( 'src/static/stylus/main.styl' )
               .pipe( sourcemaps.init() )
               .pipe( styl({ 
                   compress: true,
                   'include css' : true }) )
               .pipe( plumber() )
               .pipe( vender() )
               .pipe( sourcemaps.write() )
               .pipe( gulp.dest( 'build' ) );

});

gulp.task( 'scripts', function () {

    return gulp.src( 'src/static/scripts/*.js' )
               .pipe( uglify() )
               .pipe( concat( 'main.min.js' ) )
               .pipe( gulp.dest( 'build' ) );

});

gulp.task( 'fonts', function() {

    return gulp.src( 'src/static/fonts/**/*' )
               .pipe( gulp.dest( 'build/fonts/' ) );

});

gulp.task( 'image', function () {

    return gulp.src( 'src/static/image/**/*' )
               .pipe( gulp.dest( 'build/image/' ) );

});

gulp.task( 'svg', function () {

    return gulp.src( 'src/static/svg/*' )
               .pipe( gulp.dest( 'build/svg/' ) );

});

gulp.task( 'php:build', function () {

    return gulp.src( '*.php' )
               .pipe( gulp.dest( 'build/' ) )

});

gulp.task( 'watch', function () {

    gulp.watch( 'src/pug/**/**/*.pug', gulp.series( 'pug' ) );
    gulp.watch( 'src/static/fonts/**/*', gulp.series( 'fonts' ) );
    gulp.watch( 'src/static/stylus/**/**/**/*.styl', gulp.series( 'stylus' ) );
    gulp.watch( 'src/static/scripts/**/*.js', gulp.series( 'scripts' ) );

});

gulp.task( 'default', gulp.series( gulp.parallel( 'pug', 'fonts', 'image', 'svg', 'stylus', 'scripts', 'php:build' ),
                                   gulp.parallel( 'watch' ) ));