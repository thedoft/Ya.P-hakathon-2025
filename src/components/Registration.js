import React from 'react';

export default function Registration(props) {

	return (
		<div className="registration-form">
			<form className="form form_popup" action="#">
				<h2 className="form__title">Регистрация</h2>
				<label className="form__label" htmlFor="first-name">Имя<span className="form__require-accent">*</span></label>
				<input className="form__input form__input_type_text form__input_popup" type="text" placeholder="Логином служит адрес вашей эл. почты" required />

				<label className="form__label" htmlFor="last-name">Фамилия<span className="form__require-accent">*</span></label>
				<input type="text" className="form__input form__input_type_text form__input_popup" placeholder="Введите ваше имя" required />

				<label className="form__label" htmlFor="second-name">Отчество<span className="form__require-accent">*</span></label>
				<input type="text" className="form__input form__input_type_text form__input_popup" placeholder="Введите ваше отчество (при наличии)"/>

				<label className="form__label" htmlFor="second-name">Дата рождения<span className="form__require-accent">*</span></label>
				<input type="date" className="form__input form__input_type_text form__input_popup" placeholder="__.__.___"/>

				<div className="form__buttons">
					<button type="submit" className="button form__button">Далее</button>
					<a href="##" className="form__link">Назад</a>
				</div>
			</form>
			<div className="line">
				<p className="line__content">или</p>
			</div>
			<button type="submit" className="button form__button button_gov"></button>
		</div>
	)
}
