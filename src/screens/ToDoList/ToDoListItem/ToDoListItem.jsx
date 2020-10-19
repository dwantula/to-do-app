import React from 'react';
import TextComponent from '../../../shared/components/Text/Text';
import ButtonComponent from '../../../shared/components/Button/Button';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function ToDoListItemComponent(props) {
  return (
    <div className="row">
      <button className="checkbox" onClick={() => props.markClicked(props.item.id)}>
        {props.item.isCompleted && (
          <FontAwesomeIcon icon={faCheck} />
        )}
      </button>
        <TextComponent
          class={props.item.isCompleted ? 'text-strikethrough' : ''}
          text={props.item.text}
        />
      <button
        className="delete-button"
        onClick={() => props.deleteClicked(props.item.id)}
      >
        <FontAwesomeIcon icon={faTimes} className="delete-icon"/>
        </button>
    </div>
  )
}

export default ToDoListItemComponent;

