import React from 'react';
import { NavLink } from 'react-router-dom';

import Section from './Section';
import SectionNews from './SectionNews';

export default function NotFoundPage() {
  return (
    <>
      <Section class="section_404">
        <p className="section__subtittle section__subtitle_404">404</p>
        <h1 className="section__title section__title_404">Страница не найдена</h1>
        <p className="section__text section__text_404">
          Такой страницы не существует. Попробуйте начать с <NavLink to="/" className="section__link">главной страницы</NavLink>
        </p>
      </Section>

      <SectionNews middleware={ (items, count) => items.slice(count).reverse() } count="-3" />
    </>
  )
}
