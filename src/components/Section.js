import React from 'react';

export default function Section(props) {
  return (
    <section className={`section ${props.class || ''}`}>
      {props.children}
    </section>
  )
}
