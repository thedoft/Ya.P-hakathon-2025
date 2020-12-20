import React from 'react';
import Select from 'react-select';

import Popup from './Popup.js';
import LogIn from './LogIn.js'

export default function Forms() {

	return (
			<Popup id="login" form={LogIn}/>
	)

}