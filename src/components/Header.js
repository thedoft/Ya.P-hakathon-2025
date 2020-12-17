import React from 'react';

export default function Header() {

  function handleClick() {
    alert('Здесь будет форма авторизации');
  }

  return (
    <header className="header">
      <img src="#" alt="#" class="logo" />

      <select className="header__select">
        <option value="">--- Ваш город ---</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
      </select>

      <input type="text" className="header__input" placeholder="Поиск" />

      <nav className="header__nav">
        <ul className="menu-list">
          <li className="menu-list__item">
            <a href="/" className="menu__link">Главная</a>
          </li>
          <li className="menu-list__item">
            <a href="#ask" className="menu__link">Обращения</a>
          </li>
          <li className="menu-list__item">
            <a href="#news" className="menu__link">Новости</a>
          </li>
        </ul>
      </nav>

      <div className="header__sign-wrapper">
        <button type="button" className="header__sign-button" onClick={handleClick}>Войти</button>
        <a href="####" className="header__sign-link">Зарегистрироваться</a>
      </div>
    </header>
  )
}
