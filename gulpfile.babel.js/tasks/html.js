import gulp from 'gulp'

// Plugins.
import fileInclude from 'gulp-file-include'
import htmlmin from 'gulp-htmlmin'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import webpHtml from 'gulp-webp-html'

// Config.
import path from '../config/path'
import app from '../config/app'

const html = () => {
	return gulp.src( path.html.src )
		.pipe( plumber( {
			errorHandler: notify.onError( error => ( {
				title	: 'ERROR IN HTML',
				message	: error.message
			} ) )
		} ) )
		.pipe( fileInclude() )
		.pipe( webpHtml() )
		.pipe( htmlmin( app.htmlmin ) )
		.pipe( gulp.dest( path.html.dest ) )
}

export default html