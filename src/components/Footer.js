import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/" className="menu-list__link">Главная</NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink to="/ask" className="menu-list__link">Обращения</NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink to="/results" className="menu-list__link">Результаты</NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink to="/support" className="menu-list__link">Поддержка</NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink to="/faq" className="menu-list__link">Частые вопросы</NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink to="/social" className="menu-list__link">Соцсети</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}
