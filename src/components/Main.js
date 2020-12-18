import React from 'react';
import Form from './Form';
import cardImg from '../images/card-img.png';

export default function Main() {

  function handleSectionButtonClick() {
    alert('Скоро покажем больше :)')
  }

  return (
    <main className="main">
      <section className="section section_home">
        <h1 className="section__title section__title_home">
          Гражданская поэтическая инициатива — платформа городских улучшений, где каждый будет услышан
        </h1>

        <ul className="section__list section__list_home">
          <li className="card card_type_home">
            <p className="card__text card__text_home">Проявите инициативу</p>
          </li>
          <li className="card card_type_home">
            <p className="card__text card__text_home">Заполните форму обращения на сайте</p>
          </li>
          <li className="card card_type_home">
            <p className="card__text card__text_home">Отслеживайте процесс рассмотрения</p>
          </li>
          <li className="card card_type_home">
            <p className="card__text card__text_home">Оцените результат работы или подайте аппеляцию</p>
          </li>
        </ul>

        <a href="#form" className="section__link section__link_home">
          <button type="button" className="section__button section__button_home">Создать обращение</button>
        </a>
      </section>

      <section className="section" id="news">
        <h2 className="section__title">Новости</h2>

        <ul className="section__list">
          <li className="card card_type_small">
            <img className="card__img card__img_small" src={cardImg} alt="#" />
            <div className="card__content">
              <div className="card__info">
                <h3 className="card__title">Название</h3>
                <p className="card__date">15.11.2025</p>
              </div>
              <div className="card__text-wrapper">
                <p className="card__text">
                  стартовал проект «Время природы», который посвящен экологическим вопросам столицы. реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых
                </p>
              </div>
              <div className="card__gradient-wrapper"></div>
            </div>
          </li>
          <li className="card card_type_small">
            <img className="card__img card__img_small" src={cardImg} alt="#" />
            <div className="card__content">
              <div className="card__info">
                <h3 className="card__title">Название</h3>
                <p className="card__date">15.11.2025</p>
              </div>
              <div className="card__text-wrapper">
                <p className="card__text">
                  стартовал проект «Время природы», который посвящен экологическим вопросам столицы. реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых
                </p>
              </div>
              <div className="card__gradient-wrapper"></div>
            </div>
          </li>
          <li className="card card_type_small">
            <img className="card__img card__img_small" src={cardImg} alt="#" />
            <div className="card__content">
              <div className="card__info">
                <h3 className="card__title">Название</h3>
                <p className="card__date">15.11.2025</p>
              </div>
              <div className="card__text-wrapper">
                <p className="card__text">
                  стартовал проект «Время природы», который посвящен экологическим вопросам столицы. реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых
                </p>
              </div>
              <div className="card__gradient-wrapper"></div>
            </div>
          </li>
          <li className="card card_type_small">
            <img className="card__img card__img_small" src={cardImg} alt="#" />
            <div className="card__content">
              <div className="card__info">
                <h3 className="card__title">Название</h3>
                <p className="card__date">15.11.2025</p>
              </div>
              <div className="card__text-wrapper">
                <p className="card__text">
                  стартовал проект «Время природы», который посвящен экологическим вопросам столицы. реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых
                </p>
              </div>
              <div className="card__gradient-wrapper"></div>
            </div>
          </li>
          <li className="card card_type_small">
            <img className="card__img card__img_small" src={cardImg} alt="#" />
            <div className="card__content">
              <div className="card__info">
                <h3 className="card__title">Название</h3>
                <p className="card__date">15.11.2025</p>
              </div>
              <div className="card__text-wrapper">
                <p className="card__text">
                  стартовал проект «Время природы», который посвящен экологическим вопросам столицы. реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых реализация намеченных плановых заданий требуют определения и уточнения новыхреализация намеченных плановых заданий требуют определения и уточнения новых
                </p>
              </div>
              <div className="card__gradient-wrapper"></div>
            </div>
          </li>
        </ul>

        <button type="button" className="section__button" onClick={handleSectionButtonClick}>Больше новостей</button>
      </section>

      <section className="section" id="ask">
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

        <button type="button" className="section__button" onClick={handleSectionButtonClick}>Больше обращений</button>
      </section>

      <section className="section" id="form">
        <h2 className="section__title section__title_form">Создайте обращение</h2>
        <p className="section__subtitle">
          Поделитесь идеями развития вашего района или расскажите о его проблемах — ни одно обращение не останется без внимания. За прогрессом рассмотрения каждого обращения можете наблюдать в разделе <a href="##" className="section__link">Обращения</a>
        </p>

        <Form />
      </section>
    </main>
  )
}
