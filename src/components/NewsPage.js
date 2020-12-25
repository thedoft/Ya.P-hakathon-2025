import React from 'react';

import SectionNews from './SectionNews';

export default function NewsPage(props) {
  return (
    <SectionNews middleware={props.middleware} count={props.count}/>
  )
}
