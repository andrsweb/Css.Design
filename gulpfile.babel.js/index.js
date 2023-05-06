import gulp from 'gulp'
import browserSync from 'browser-sync'

// Plugins for SCSS.
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import autoprefixer from 'gulp-autoprefixer'
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import shorthand from 'gulp-shorthand'
import groupCssMediaQueries	from 'gulp-group-css-media-queries'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import webpCss from 'gulp-webp-css'

// Tasks.
import clear from './tasks/clear'
import html from './tasks/html'
import js from './tasks/js'
import img from './tasks/img'

// Config.
import path from './config/path'
import app from './config/app'
import gulpIf from "gulp-if";
import imagemin from "gulp-imagemin";

const sass = gulpSass( dartSass )

const server = () => {
	browserSync.init( {
		server: {
			baseDir	: path.root
		},
		notify	: false,
		online	: true
	} )
}

const scss = () => {
	return gulp.src( path.scss.src, { sourcemaps: app.isDev } )
		.pipe( plumber( {
			errorHandler: notify.onError( error => ( {
				title	: 'ERROR IN SCSS',
				message	: 'Details: ' + error.message
			} ) )
		} ) )
		.pipe( sass() )
		.pipe( webpCss() )
		.pipe( autoprefixer() )
		.pipe( gulpIf( app.isProd, shorthand() ) )
		.pipe( gulpIf( app.isProd, groupCssMediaQueries() ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( gulpIf( app.isProd, csso() ) )
		.pipe( gulp.dest( path.scss.dest, { sourcemaps: app.isDev } ) )
		.pipe( browserSync.stream() )
}

const watcher = () => {
	gulp.watch( path.html.watch, html ).on( 'all', browserSync.reload )
	gulp.watch( path.scss.watch, scss )
	gulp.watch( path.js.watch, js ).on( 'all', browserSync.reload )
	gulp.watch( path.img.watch, img ).on( 'all', browserSync.reload )
}

const build = gulp.series(
	clear,
	gulp.parallel( html, scss, js, img )
)

const dev = gulp.series(
	build,
	gulp.parallel( watcher, server )
)

// See "scripts" object in package.json.
export default app.isProd ? build : dev