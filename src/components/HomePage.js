import React from 'react';

import SectionHome from './SectionHome';
import SectionNews from './SectionNews';
import SectionInitiatives from './SectionInitiatives';
import SectionForm from './SectionForm';

import { initiatives } from '../data/initiatives';

export default function HomePage() {
  const [i, setI] = React.useState([]);

  React.useEffect(() => {
    setI(initiatives);
  }, []);

  function handleFormSubmit(item) {
    initiatives.push(item);
    setI([...i, item]);

    alert('Ваше обращение отправлено!');
  }

  function showInfinitedCountItemsReversed(items, count) {
    return items.slice(count).reverse();
  }

  return (
    <>
      <SectionHome />
      <SectionNews middleware={showInfinitedCountItemsReversed} count="-5" />
      <SectionInitiatives middleware={showInfinitedCountItemsReversed} count="-3" />
      <SectionForm onSubmit={handleFormSubmit} />
    </>
  )
}
