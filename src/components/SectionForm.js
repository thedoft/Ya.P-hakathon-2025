import React from 'react';
import { NavLink } from 'react-router-dom';

import Section from './Section';
import Form from './Form';

export default function SectionForm(props) {
  return (
    <Section>
      <h2 className="section__title section__title_form">Создайте обращение</h2>
      <p className="section__subtitle">
        Поделитесь идеями развития вашего района или расскажите о его проблемах — ни одно обращение не останется без внимания. За прогрессом рассмотрения каждого обращения можете наблюдать в разделе <NavLink to="/initiatives" className="section__link">Обращения</NavLink>
      </p>

      <Form onSubmit={props.onSubmit} />
    </Section>
  )
}
