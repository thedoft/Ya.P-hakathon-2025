import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <img src="#" alt="#" className="logo" />
      <div className="copyright">
        <div className="copyright__sympol">&copy;</div>
        <div className="copyright__text">2020-2025 ГПИ проект правительства РФ </div>
      </div>
      <ul className="menu-list">
        <li className="menu-list__item">
          <a href="/" className="menu-list__link">Главная</a>
        </li>
        <li className="menu-list__item">
          <a href="##" className="menu-list__link">Обращения</a>
        </li>
        <li className="menu-list__item">
          <a href="###" className="menu-list__link">Результаты</a>
        </li>
        <li className="menu-list__item">
          <a href="####" className="menu-list__link">Поддержка</a>
        </li>
        <li className="menu-list__item">
          <a href="#####" className="menu-list__link">Частые вопросы</a>
        </li>
        <li className="menu-list__item">
          <a href="######" className="menu-list__link">Соцсети</a>
        </li>
      </ul>
    </footer>
  )
}
