var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');


// gulp.task('clean', async function(){
//     del.sync('dist')
// });



gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            // browsers: ['last 8 versions']
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('css', function(){
    return gulp.src(['node_modules/normalize.css/normalize.css',
                        'node_modules/magnific-popup/dist/magnific-popup.css',
                        'node_modules/slick-carousel/slick/slick.css',
                        'node_modules/animate.css/animate.css'])
        .pipe(concat('_libs.css'))
        .pipe(gulp.dest('app/libs'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('js', function(){
    return gulp.src(['node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                     'node_modules/slick-carousel/slick/slick.js',
                     'node_modules/wow.js/dist/wow.js'
                    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});


gulp.task('build', async function(){
    let buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'))

    let buildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'))

    let buildJs = gulp.src('app/Js/**/*.js')
        .pipe(gulp.dest('dist/js'))

    let buildFonts = gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))

    let buildImg = gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img'))
});


gulp.task('watch', function(){
    return gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')),
            gulp.watch('app/*.html', gulp.parallel('html')),
            gulp.watch('app/js/*.js', gulp.parallel('script'))
    
});

// gulp.task('watch', function(){});

// gulp.task('watch', function(){
//     return 
// });


gulp.task('default', gulp.parallel('css', 'sass', 'js', 'browser-sync', 'watch'));

