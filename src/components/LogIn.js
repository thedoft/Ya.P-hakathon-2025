import React from 'react';

export default function LogIn() {

	const handleSubmit = function(){
		alert('Почти вошли')
	}
	
	return (
		<div className="">
			<form className="form form_popup" action="#" onSubmit={handleSubmit}>
				<h2 class="form__title">Вход</h2>
				<label className="form__label" htmlFor="login">Логин<span className="form__require-accent">*</span></label>
				<input id="#login" className="form__input form__input_type_text form__input_popup" placeholder="Логином служит адрес вашей эл. почты" required />

				<label className="form__label" htmlFor="password">Пароль<span className="form__require-accent">*</span></label>
				<input id="#password" type="password" className="form__input form__input_type_text form__input_popup" placeholder="Введите пароль" autocomplete="current-password" required />
				<div className="form__buttons">
					<button type="submit" className="button form__button">Войти</button>
					<a href="#" className="form__link">Зарегистрироваться</a>
				</div>
			</form>
			<div className="line">
				<p className="line__content">или</p>
			</div>
			<button type="submit" className="button form__button button_gov"></button>
		</div>
	)
}