import React from 'react';

import { useInput } from '../hooks/useInput';

import Popup from './Popup';
import Button from './Button';

export default function Login(props) {
  const { value: login, bind: bindLogin, reset: resetLogin } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

  React.useEffect(() => {
    if (props.isOpen) {
      resetLogin();
      resetPassword();
      document.addEventListener('keyup', props.onEscape);
    }

    return () => {
      document.removeEventListener('keyup', props.onEscape);
    };
  }, [props]);

  function handleClose() {
    props.onClose();
  }

  function handleLayoutClick(popup) {
    props.onLayout(popup);
  }

	const handleSubmit = (evt) => {
    evt.preventDefault();

    const userLogin = login;
    const userPassword = password;

    props.onClose();

    alert('Почти вошли')
    console.log(userLogin, userPassword);
	}

	return (
    <Popup isOpen={props.isOpen} onClose={handleClose} onLayout={handleLayoutClick} >
  		<div className="login-form">
  			<form className="form form_popup" action="#" onSubmit={handleSubmit}>
  				<h2 className="form__title">Вход</h2>

          <label className="form__label" htmlFor="login">Логин<span className="form__require-accent">*</span></label>
  				<input {...bindLogin} id="#login" className="form__input form__input_type_text form__input_popup" placeholder="Логином служит адрес вашей эл. почты" autoComplete="user-name" required />

  				<label className="form__label" htmlFor="password">Пароль<span className="form__require-accent">*</span></label>
  				<input {...bindPassword} id="#password" type="password" className="form__input form__input_type_text form__input_popup" placeholder="Введите пароль" autoComplete="current-password" required />

          <div className="form__buttons">
            <Button type="submit" class="form__button" text="Войти" />
  					<a onClick={ () => alert('Скоро можно будет зарегистрироваться!') } href="/#" className="form__link">Зарегистрироваться</a>
  				</div>
  			</form>

  			<div className="line">
  			  <p className="line__content">или</p>
  			</div>

        <Button type="submit" class="form__button button_gov" text="" />
  		</div>
    </Popup>
	)
}
