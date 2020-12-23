import React from 'react';

export default function InDevPage(props) {
  return (
    <section className="section">
      <h1 className="section__title">{props.title}</h1>
      <p className="section__subtitle">Страница в разработке, заходите позже...</p>
    </section>
  )
}
