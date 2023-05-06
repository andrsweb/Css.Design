document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	callAndClosePopup()
} )

const callAndClosePopup = () => {
	const popupWrapper = document.querySelector( '.popup-wrapper' )
	const button       = document.querySelector( '.form-button' )
	const closeButton  = document.querySelector( '.close-button' )

	if( ! popupWrapper && ! button ) return  // If the element is missing, exit the function

	button.addEventListener( 'click', () => {                     // Show popup window after click
		if( ! popupWrapper.classList.contains( 'showed' ) ) {
			popupWrapper.classList.add( 'showed' )
		}
	} )

	closeButton.addEventListener( 'click', () => {       // Close popup after click by close button
			popupWrapper.classList.remove( 'showed' )
	} )
}
