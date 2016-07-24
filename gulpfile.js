var gulp = require("gulp");

var path = {
	"scripts" : ["./bower_components/jquery/dist/jquery.js"],
	"styles" : []
};

gulp.task('scripts', function() {
  return gulp.src(path.scripts)
    .pipe(gulp.dest('public/build/js'));
});

gulp.task('default', ['scripts']);