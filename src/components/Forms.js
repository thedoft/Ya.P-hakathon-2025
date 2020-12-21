import React from 'react';

import Popup from './Popup.js';
import LogIn from './LogIn.js'
import Registration from './Registration.js'

export default function Forms(props) {
	
	return (
		<div>
			<Popup 
				id = "login"
				form = {LogIn}
				isClosePopupLogin = {props.isClosePopupLogin}
				isOpenLogin = {props.isOpenLogin}	
				onLayout = {props.onLayout}
				onEscape = {props.onEscape}
			/>

			<Popup 
				id = "registration"
				form = {Registration}
			/>
		</div>
	)
}
