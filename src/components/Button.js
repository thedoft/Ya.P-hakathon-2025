import React from 'react';

export default function Button(props) {
  return (
    <button type={props.type} className={`button ${props.class}`}>
      {props.text}
    </button>
  )
}
