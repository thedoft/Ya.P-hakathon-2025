import React from 'react';

export default function InfoItem(props) {
  const item = props.item;

  return (
    <li className="info-item">
      <span className="info-item__num">{item.num}</span>
      <span className="info-item__text">{item.text}</span>
    </li>
  )
}
