import React from 'react';

export default function CardHome(props) {
  return (
    <li className="card card_type_home">
      <p className="card__text card__text_home">{props.card.text}</p>
    </li>
  )
}
