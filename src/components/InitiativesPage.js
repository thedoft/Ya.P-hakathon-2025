import React from 'react';

import SectionInitiatives from './SectionInitiatives';

export default function InitiativesPage(props) {
  return (
    <SectionInitiatives middleware={props.middleware} count={props.count}/>
  )
}
