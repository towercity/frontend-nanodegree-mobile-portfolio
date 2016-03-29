var gulp = require('gulp');

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

// minify new images in main website folder
gulp.task('imagemin', function() {
    var imgSrc = './src/img/**/*',
        imgDst = './build/img';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

// minify new images in pizza folder
gulp.task('imageminPizza', function() {
    var imgSrc = './src/views/images/**/*',
        imgDst = './build/views/images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});
