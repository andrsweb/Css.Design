document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    submitForm( '.form', '.form-response', 'send-form.php')
} )

const submitForm = ( selector, response, php ) => {
	const forms	= document.querySelectorAll( selector )

	if( ! forms.length ) return

	forms.forEach( form => {
		form.addEventListener( 'submit', e => {
			e.preventDefault()

			const formResponse	= form.querySelector( response ),
					request		= new XMLHttpRequest(),
					formData		= new FormData( form )

			request.open( 'post', php, true )
			request.responseType = 'json'

			formResponse.classList.remove( ['success', 'error'] )
			formResponse.textContent = 'Обработка...'

			request.addEventListener( 'load', () => {
				if( request.status === 200 ){
					// If success.
					if( request.response.success ){
						form.classList.add( 'success' )
						form.classList.remove( 'error' )
						formResponse.innerHTML = request.response.message

					}	else {	// If error.
						formResponse.classList.remove( 'success' )
						formResponse.classList.add( 'error' )
						formResponse.textContent = request.response.message
					}
				}	else {
					formResponse.classList.remove( 'success' )
					formResponse.classList.add( 'error' )
					formResponse.textContent = request.response
				}
			} )

			request.send( formData )
		} )
	} )
}