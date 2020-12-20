import React from 'react';
import copy from '../images/copy.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wraper">
        <div className="copyright">
          <img src="./logo.png" alt="#" className="logo" />
          <div className="copyright__content">
            <img src={copy} alt="#" className="copyright__sympol" />
            <div className="copyright__text-block">
              <p className="copyright__text">2020-2025</p>
              <p className="copyright__text">ГПИ проект правительства РФ</p>
            </div>
          </div>
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
      </div>
    </footer>
  )
}
