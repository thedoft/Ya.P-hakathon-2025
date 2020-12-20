import React from 'react';

import CardHome from './CardHome';
import CardSmall from './CardSmall';
import CardBig from './CardBig';
import InfoItem from './InfoItem';
import Form from './Form';
import Button from './Button';

import { cardsHome } from '../data/cardsHome';
import { cardsSmall } from '../data/cardsSmall';
import { cardsBig } from '../data/cardsBig';
import { infoItems } from '../data/infoItems';

export default function Main() {

  function handleSectionButtonClick() {
    alert('Скоро покажем больше :)')
  }

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
      </section>

      <section className="section" id="news">
        <h2 className="section__title">Новости</h2>

        <ul className="section__list">
          {cardsSmall.map((card, index) => (
            <CardSmall card={card} key={index} />
          ))}
        </ul>

        <Button type="button" class="section__button" onClick={handleSectionButtonClick} text="Больше новостей" />
      </section>

      <section className="section" id="ask">
        <h2 className="section__title">Недавние обращения</h2>

        <ul className="section__list section__list_info">
          {infoItems.map((item, index) => (
            <InfoItem item={item} key={index} />
          ))}
        </ul>

        <ul className="section__list">
          {cardsBig.map((card, index) => (
            <CardBig card={card} key={index} />
          ))}
        </ul>

        <Button type="button" class="section__button" onClick={handleSectionButtonClick} text="Больше обращений" />
      </section>

      <section className="section" id="form">
        <h2 className="section__title section__title_form">Создайте обращение</h2>
        <p className="section__subtitle">
          Поделитесь идеями развития вашего района или расскажите о его проблемах — ни одно обращение не останется без внимания. За прогрессом рассмотрения каждого обращения можете наблюдать в разделе <a href="##" className="section__link">Обращения</a>
        </p>

        <Form />

      </section>
    </>
  )
}
