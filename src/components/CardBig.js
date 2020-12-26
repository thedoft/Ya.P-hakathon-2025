import React from 'react';

export default function CardBig(props) {
  const card = props.item;

  return (
    <li className="card card_type_big">
      <div className="card__img-wrapper">
        { card.img ? <img className="card__img card__img_big" src={card.img} alt={card.title} /> : ''}
        <div className="card__info-label-wrapper">
          <span className="card__info-label card__info-label_theme">{card.theme}</span>
          <span className="card__info-label card__info-label_status">{card.status}</span>
        </div>
        <span className="card__info-label card__info-label_files">3</span>
      </div>
      <div className="card__content card__content_big">
        <div className="card__info">
          <h3 className="card__title card__title_big">{card.title}</h3>
          <p className="card__date">1 мин</p>
        </div>
        <div className="card__gradient-wrapper">
          <div className={`card__text-wrapper card__text-wrapper_big ${card.img ? '' : 'card__text__wrapper_no-img'}`}>
            <p className="card__text">{card.text}</p>
          </div>
          <div className="card__gradient"></div>
        </div>
        <p className="card__address">{card.address}</p>
      </div>
    </li>
  )
}
