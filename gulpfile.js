var gulp      	= require('gulp');
var sass        = require('gulp-sass');
var imagemin    = require('gulp-imagemin');
// var rename      = require('gulp-rename');
// var pngquant    = require('imagemin-pngquant');
// var cache		= require('gulp-cache');
// var uglify       = require('gulp-uglify');
// var csslint     = require('gulp-csslint');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
// var jade         = require('gulp-jade');

gulp.task('sass', function() {
   return gulp.src('app/sass/**/*.scss')
       .pipe(sass())
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
       .pipe(gulp.dest('dist/css'))
       .pipe(browserSync.reload({stream: true}))
});

// gulp.task('build-jade', function () {
//     return gulp.src('app/**/*.jade')
//         .pipe(jade()) // pip to jade plugin
//         .pipe(gulp.dest('./dist/')); // tell gulp our output folder
// });

gulp.task('pages', function(){
    return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}))
});

// simple variant for img
gulp.task('img', function() {
    gulp.src('app/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

// gulp.task('img', function() {
//     gulp.src('app/img/**/*')
//         .pipe(cache(imagemin({
//             interlaced: true,
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('dist/img'))
// });

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false // delete notifications in browser-sync
	});
});

// чтобы запустить эту задачу, наберите в командной строке gulp jade
// gulp.task('jade', function() {
//     return gulp.src('app/templates/**/*.jade')
//         .pipe(jade()) 
//         .pipe(gulp.dest('dist/development')); // указываем gulp куда положить скомпилированные HTML файлы
// });

gulp.task('scripts', function() {
    return gulp.src('app/js/**/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// gulp.task('scripts', function() {
//     return gulp.src('app/js/**/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
// });

gulp.task('default', function() {
    gulp.start('pages', 'sass', 'browserSync', 'img', 'scripts');
    gulp.watch('app/*.html', ['pages']);
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['scripts']);
});

