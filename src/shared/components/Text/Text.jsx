import React from 'react';
import './style.scss';

function TextComponent(props) {
  // const class =
  return (
    <p className={`${props.class} thing-text`}>{props.text}</p>
  )
}
export default TextComponent;
