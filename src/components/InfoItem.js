import React from 'react';

export default function InfoItem(props) {
  const item = props.item;

  return (
    <li class="info-item">
      <span class="info-item__num">{item.num}</span>
      <span class="info-item__text">{item.text}</span>
    </li>
  )
}
