import gulp from 'gulp'

// Plugins.
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import webp from 'gulp-webp'
import gulpIf from 'gulp-if'

// Config.
import path from '../config/path'
import app from '../config/app'

const img = () => {
	return gulp.src( path.img.src )
		.pipe( plumber( {
			errorHandler: notify.onError( error => ( {
				title	: 'ERROR IN IMAGES',
				message	: error.message
			} ) )
		} ) )
		.pipe( newer( path.img.dest ) )
		.pipe( webp() )
		.pipe( gulp.dest( path.img.dest ) )
		.pipe( gulp.src( path.img.src ) )
		.pipe( newer( path.img.dest ) )
		.pipe( gulpIf( app.isProd, imagemin( app.imagemin ) ) )
		.pipe( gulp.dest( path.img.dest ) )
}

export default img