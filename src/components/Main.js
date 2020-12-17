import React from 'react';
import Form from './Form';

export default function Main() {
  return (
    <main className="main">
      <section className="section section_home">
        <h1 className="section__title section__title_home">
          Гражданская поэтическая инициатива — платформа городских улучшений, где каждый будет услышан
        </h1>

        <ul className="section__list">
          <li className="home-card">
            <p className="home-card__text">Проявите инициативу</p>
          </li>
          <li className="home-card">
            <p className="home-card__text">Заполните форму обращения на сайте</p>
          </li>
          <li className="home-card">
            <p className="home-card__text">Отслеживайте процесс рассмотрения</p>
          </li>
          <li className="home-card">
            <p className="home-card__text">Оцените результат работы или подайте аппеляцию</p>
          </li>
        </ul>

        <a href="#form" className="home-section__link">
          <button className="home-section__button">Создать обращение</button>
        </a>
      </section>

      <section className="section">
        <h2 className="section__title">Новости</h2>

        <ul className="section__list">
          <li className="card card_small"></li>
          <li className="card card_small"></li>
          <li className="card card_small"></li>
          <li className="card card_small"></li>
          <li className="card card_small"></li>
        </ul>

        <button type="button" className="section__button">Больше новостей</button>
      </section>

      <section className="section">
        <h2 className="section__title">Недавние обращения</h2>

        <ul className="info-list">
          <li className="info-list__item"></li>
          <li className="info-list__item"></li>
          <li className="info-list__item"></li>
        </ul>

        <ul className="section__list">
          <li className="card card_big"></li>
          <li className="card card_big"></li>
          <li className="card card_big"></li>
        </ul>

        <button type="button" className="section__button">Больше обращений</button>
      </section>

      <section className="section" id="form">
        <h2 className="section__title">Создайте обращение</h2>
        <p className="section__subtitle">
          Поделитесь идеями развития вашего района или расскажите о его проблемах — ни одно обращение не останется без внимания. За прогрессом рассмотрения каждого обращения можете наблюдать в разделе Обращения
        </p>

        <Form />
      </section>
    </main>
  )
}
