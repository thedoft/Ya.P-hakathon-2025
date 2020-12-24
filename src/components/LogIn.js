import React from 'react';

import Popup from './Popup';
import Button from './Button';

export default function Login(props) {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (props.isOpen) {
      document.addEventListener('keyup', props.onEscape);
      setLogin('');
      setPassword('');
    }

    return () => {
      document.removeEventListener('keyup', props.onEscape);
    };
  }, [props]);

  function handleLoginChange(evt) {
    setLogin(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleClose() {
    props.onClose();
    setLogin('');
    setPassword('');
  }

  function handleLayoutClick(popup) {
    props.onLayout(popup);
  }

	const handleSubmit = (evt) => {
    evt.preventDefault();

    setLogin('');
    setPassword('');

    props.onClose();
		alert('Почти вошли')
	}

	return (
    <Popup isOpen={props.isOpen} onClose={handleClose} onLayout={handleLayoutClick} >
  		<div className="login-form">
  			<form className="form form_popup" action="#" onSubmit={handleSubmit}>
  				<h2 className="form__title">Вход</h2>

          <label className="form__label" htmlFor="login">Логин<span className="form__require-accent">*</span></label>
  				<input value={login} onChange={handleLoginChange} id="#login" className="form__input form__input_type_text form__input_popup" placeholder="Логином служит адрес вашей эл. почты" autoComplete="user-name" required />

  				<label className="form__label" htmlFor="password">Пароль<span className="form__require-accent">*</span></label>
  				<input value={password} onChange={handlePasswordChange} id="#password" type="password" className="form__input form__input_type_text form__input_popup" placeholder="Введите пароль" autoComplete="current-password" required />

          <div className="form__buttons">
            <Button type="submit" class="form__button" text="Войти" />
  					<a href="##" className="form__link">Зарегистрироваться</a>
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
