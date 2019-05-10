var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });

    gulp.watch("./sass/*.scss").on('change', () => {
        gulp.src('./sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
        browserSync.reload()
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});