import React from 'react';
import './style.scss';

function TextComponent(props) {
  return (
    <p className= "thing-text"> {props.text}</p>
  )
}

export default TextComponent;
