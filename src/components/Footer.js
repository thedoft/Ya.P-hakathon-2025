import React from 'react';
import logo from '../images/logo.svg';
import copy from '../images/copy.svg';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__wraper">
        <div class="copyright">
          <img src={logo} alt="#" class="logo logo_small" />
          <div class="copyright__content">
            <img src={copy} alt="#" class="copyright__sympol" />
            <div class="copyright__text-block">
              <p class="copyright__text">2020-2025</p>
              <p class="copyright__text">ГПИ проект правительства РФ</p>
            </div>
          </div>
        </div>
        <ul class="menu-list">
          <li class="menu-list__item">
            <a href="/" class="menu-list__link">Главная</a>
          </li>
          <li class="menu-list__item">
            <a href="##" class="menu-list__link">Обращения</a>
          </li>
          <li class="menu-list__item">
            <a href="###" class="menu-list__link">Результаты</a>
          </li>
          <li class="menu-list__item">
            <a href="####" class="menu-list__link">Поддержка</a>
          </li>
          <li class="menu-list__item">
            <a href="#####" class="menu-list__link">Частые вопросы</a>
          </li>
          <li class="menu-list__item">
            <a href="######" class="menu-list__link">Соцсети</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
