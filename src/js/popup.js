import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	callAndClosePopup()
} )

const callAndClosePopup = () => {
	const popupWrapper = document.querySelector( '.popup-wrapper' )
	const button       = document.querySelector( '.form-button' )
	const closeButton  = document.querySelector( '.close-button' )
	setTargetElement( document.querySelector( '#body-lock' ) )

	if( ! popupWrapper && ! button ) return  // If the element is missing, exit the function

	button.addEventListener( 'click', e => {       // Show popup window after click
		e.preventDefault() 

		if( ! popupWrapper.classList.contains( 'showed' ) ) {
			popupWrapper.classList.add( 'showed' )
			disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )
		}
	} )

	closeButton.addEventListener( 'click', () => {       // Close popup after click by close button
			popupWrapper.classList.remove( 'showed' )
			enableBodyScroll( getTargetElement() )
	} )
}
