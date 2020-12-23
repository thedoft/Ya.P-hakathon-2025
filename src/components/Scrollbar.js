import React from 'react';

export default function Scrollbar() {
  return (
    <ul className="scrollbar">
      <li className="scrollbar__item scrollbar__item_current"></li>
      <li className="scrollbar__item"></li>
      <li className="scrollbar__item"></li>
      <li className="scrollbar__item"></li>
    </ul>
  )
}
