import React from 'react';
import { NavLink } from 'react-router-dom';

import Section from './Section';
import SectionList from './SectionList';
import CardBig from './CardBig';

import { initiatives } from '../data/initiatives';

export default function SectionInitiatives(props) {
  return (
    <Section>
      <NavLink to="/initiatives" style={{ 'textDecoration': 'none' }}>
        <h2 className="section__title">Недавние обращения</h2>
      </NavLink>

      {props.children && props.children[0]}

      <SectionList items={initiatives} template={CardBig} middleware={props.middleware} count={props.count} />

      {props.children && props.children[1]}
    </Section>
  )
}
