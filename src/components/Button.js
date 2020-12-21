import React from 'react';

export default function Button(props) {
  function handleButtonClick() {
    if (props.onClick) {
      props.onClick();
    }
    return;
  }

  return (
    <button type={props.type} className={`button ${props.class}`} onClick={handleButtonClick}>
      {props.text}
    </button>
  )
}
