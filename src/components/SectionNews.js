import React from 'react';
import { NavLink } from 'react-router-dom';

import Section from './Section';
import SectionList from './SectionList';
import Button from './Button';
import CardSmall from './CardSmall';

import { news } from '../data/news';

export default function SectionNews(props) {
  return (
    <Section>
      <NavLink to="/news" style={{ 'textDecoration': 'none' }}>
        <h2 className="section__title">Новости</h2>
      </NavLink>

      <SectionList items={news} template={CardSmall} middleware={props.middleware} count={props.count} />

      {props.children}
    </Section>
  )
}
