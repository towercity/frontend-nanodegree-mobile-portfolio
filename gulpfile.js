var gulp = require('gulp');

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

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

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
    var htmlSrc = './src/*.html',
        htmlDst = './build';

    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst));
});

// minify new or changed HTML pages in pizza folder
gulp.task('htmlpagePizza', function() {
    var htmlSrc = './src/views/*.html',
        htmlDst = './build/views';

    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst));
});

// JS strip debugging and minify
gulp.task('scripts', function() {
    var jsSrc = './src/js/*.js',
        jsDst = './build/js/';

    gulp.src(jsSrc)
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});

// JS strip debugging and minify in pizza folder
gulp.task('scriptsPizza', function() {
    var jsSrc = './src/views/js/*.js',
        jsDst = './build/views/js/';

    gulp.src(jsSrc)
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});

// CSS auto-prefix and minify
gulp.task('styles', function() {
    var cssSrc = './src/css/*.css',
        cssDst = './build/css';

    gulp.src(cssSrc)
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssDst));
});

// CSS auto-prefix and minify in pizza folder
gulp.task('stylesPizza', function() {
    var cssSrc = './src/views/css/*.css',
        cssDst = './build/views/css';

    gulp.src(cssSrc)
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssDst));
});

// default task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles'], function() {
});

// pizza task
gulp.task('pizza', ['imageminPizza', 'htmlpagePizza', 'scriptsPizza', 'stylesPizza'], function() {
});

// watch task
gulp.task('watch' function() {
    // watch for HTML changes
    gulp.watch('./src/*.html', function() {
        gulp.run('htmlpage');
    });

    // watch for JS changes
    gulp.watch('./src/js/*.js', function() {
        gulp.run('scripts');
    });

    // watch for CSS changes
    gulp.watch('./src/css/*.css', function() {
        gulp.run('styles');
    });

    // watch for HTML changes in Pizza
    gulp.watch('./src/views/*.html', function() {
        gulp.run('htmlpagePizza');
    });

    // watch for JS changes in Pizza
    gulp.watch('./src/views/js/*.js', function() {
        gulp.run('scriptsPizza');
    });

    // watch for CSS changes in Pizza
    gulp.watch('./src/views/css/*.css', function() {
        gulp.run('stylesPizza');
    });
});
