import React from 'react';

export default function Popup(popup) {
	/* popup_hidden this`s selector for hidden popup */
	
	const closePopup = function (){
		console.log(document.querySelector('#' + popup.id));
	}

	return (
		<div className="popup popup_hidden" id={popup.id}>
			<div className="popup__block">
				<button className="button button_type_close" aria-label="Закрыть" type="button" onClick={closePopup}></button>
				{popup.form(popup.id)}
			</div>
		</div>
	)
}