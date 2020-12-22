import React from 'react';
import { NavLink } from 'react-router-dom';

import Section from './Section';
import SectionList from './SectionList';
import Button from './Button';
import Scrollbar from './Scrollbar';
import CardHome from './CardHome';

import { cardsHome } from '../data/cardsHome';

export default function SectionHome() {
  return (
    <Section class="section_home">
      <div className="section__background"></div>

      <h1 className="section__title section__title_home">
        Гражданская поэтическая инициатива — платформа городских улучшений, где каждый будет услышан
      </h1>

      <SectionList class="section__list_home" items={cardsHome} template={CardHome} />

      <a href="#form" className="section__link section__link_home">
        <Button type="button" class="section__button section__button_home" text="Создать обращение" />
      </a>

      <Scrollbar />

      <ul className="side-nav">
        <li className="side-nav__item">
          <NavLink to="/social" className="side-nav__link">Соцсети</NavLink>
        </li>
        <li className="side-nav__item">
          <NavLink to="/faq" className="side-nav__link">Частые вопросы</NavLink>
        </li>
        <li className="side-nav__item">
          <NavLink to="/support" className="side-nav__link">Поддержка</NavLink>
        </li>
      </ul>
    </Section>
  )
}
