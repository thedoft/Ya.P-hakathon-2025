import React from 'react';
import { NavLink } from 'react-router-dom';

import SectionHome from './SectionHome';
import SectionNews from './SectionNews';
import SectionInitiatives from './SectionInitiatives';
import SectionForm from './SectionForm';
import Button from './Button';

import { initiatives } from '../data/initiatives';

export default function HomePage(props) {
  const [i, setI] = React.useState([]);

  React.useEffect(() => {
    setI(initiatives);
  }, []);

  function handleFormSubmit(item) {
    initiatives.push(item);
    setI([...i, item]);

    alert('Ваше обращение отправлено!');
  }

  return (
    <>
      <SectionHome />

      <SectionNews middleware={props.middleware} count="-5" >
        <NavLink to="/news">
          <Button type="button" class="section__button" text="Больше новостей" />
        </NavLink>
      </SectionNews>

      <SectionInitiatives middleware={props.middleware} count="-3" >
        <NavLink to="/initiatives">
          <Button type="button" class="section__button" text="Больше обращений" />
        </NavLink>
      </SectionInitiatives>

      <SectionForm onSubmit={handleFormSubmit} />
    </>
  )
}
