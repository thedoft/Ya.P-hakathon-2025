import React from 'react';
import { NavLink } from 'react-router-dom';

import Section from './Section';
import SectionList from './SectionList';
import Button from './Button';
import InfoItem from './InfoItem';
import CardBig from './CardBig';

import { infoItems } from '../data/infoItems';
import { initiatives } from '../data/initiatives';

export default function SectionInitiatives(props) {
  return (
    <Section>
      <NavLink to="/initiatives" style={{ 'textDecoration': 'none' }}>
        <h2 className="section__title">Недавние обращения</h2>
      </NavLink>

      <SectionList class="section__list_info" items={infoItems} template={InfoItem} />

      <SectionList items={initiatives} template={CardBig} middleware={props.middleware} count={props.count} />

      <NavLink to="/initiatives">
        <Button type="button" class="section__button" text="Больше обращений" />
      </NavLink>
    </Section>
  )
}
