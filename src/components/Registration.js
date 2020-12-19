import React from 'react';

export default function Registration() {

	const handleSubmit = function(){
		alert('!!!!!')
	}
	
	return (
		<form className="form" action="#" onSubmit={handleSubmit}>
			<label className="form__label" htmlFor="login">Логин<span className="form__require-accent">*</span></label>
      <input id="#login" className="form__input form__input_type_text" placeholder="Логином служит адрес вашей эл. почты" required />

			<label className="form__label" htmlFor="login">Пароль<span className="form__require-accent">*</span></label>
      <input id="#login" className="form__input form__input_type_text" placeholder="Введите пароль" required />
			<div className="">
				<button type="submit" class="button">Войти</button>
				<a href="#" className="">Зарегистрироваться</a>
			</div>
		</form>
	)
}