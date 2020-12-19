import React from 'react';

export default function Button(props) {
  function handleButtonClick() {
    props.onClick();
  }

  return (
    <button type={props.type} className={`button ${props.class}`} onClick={handleButtonClick}>
      {props.text}
    </button>
  )
}
