import React from 'react';

import Section from './Section';

export default function NotFoundPage() {
  return (
    <Section class="section_404">
      <h1 className="section__title section__title_404">{`Страница не найдена :(`}</h1>
      <p className="section__subtittle section__subtittle_404">404</p>
    </Section>
  )
}
