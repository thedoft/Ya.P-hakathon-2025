import React from 'react';
import { NavLink } from 'react-router-dom';

import CardHome from './CardHome';
import CardSmall from './CardSmall';
import CardBig from './CardBig';
import InfoItem from './InfoItem';
import Form from './Form';
import Button from './Button';
import Scrollbar from './Scrollbar';

import { cardsHome } from '../data/cardsHome';
import { news } from '../data/news';
import { initiatives } from '../data/initiatives';
import { infoItems } from '../data/infoItems';

export default function HomePage() {
  return (
    <>
      <section className="section section_home">
        <h1 className="section__title section__title_home">
          Гражданская поэтическая инициатива — платформа городских улучшений, где каждый будет услышан
        </h1>

        <ul className="section__list section__list_home">
          {cardsHome.map((card, index) => (
            <CardHome card={card} key={index} />
          ))}
        </ul>

        <a href="#form" className="section__link section__link_home">
          <Button type="button" class="section__button section__button_home" text="Создать обращение" />
        </a>

        <div className="section__background"></div>
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
      </section>

      <section className="section" id="news">
      <NavLink to="/news" style={{ 'text-decoration': 'none' }}>
        <h2 className="section__title">Новости</h2>
      </NavLink>

        <ul className="section__list">
          {news.map((card, index) => (
            <CardSmall card={card} key={index} />
          ))}
        </ul>

        <NavLink to="/news">
          <Button type="button" class="section__button" text="Больше новостей" />
        </NavLink>
      </section>

      <section className="section" id="ask">
      <NavLink to="/initiatives" style={{ 'text-decoration': 'none' }}>
        <h2 className="section__title">Недавние обращения</h2>
      </NavLink>

        <ul className="section__list section__list_info">
          {infoItems.map((item, index) => (
            <InfoItem item={item} key={index} />
          ))}
        </ul>

        <ul className="section__list">
          {initiatives.map((card, index) => (
            <CardBig card={card} key={index} />
          ))}
        </ul>

        <NavLink to="/initiatives">
          <Button type="button" class="section__button" text="Больше обращений" />
        </NavLink>
      </section>

      <section className="section" id="form">
        <h2 className="section__title section__title_form">Создайте обращение</h2>
        <p className="section__subtitle">
          Поделитесь идеями развития вашего района или расскажите о его проблемах — ни одно обращение не останется без внимания. За прогрессом рассмотрения каждого обращения можете наблюдать в разделе <NavLink to="/initiatives" className="section__link">Обращения</NavLink>
        </p>

        <Form />

      </section>
    </>
  )
}
