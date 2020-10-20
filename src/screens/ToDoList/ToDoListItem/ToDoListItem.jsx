import React from 'react';
import TextComponent from '../../../shared/components/Text/Text';
import ButtonComponent from '../../../shared/components/Button/Button';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

function ToDoListItemComponent(props) {
  return (
    <div className="row">
      <div className={`${props.item.isCompleted ? 'row-item-completed' : 'row-item'}`}>
        <FontAwesomeIcon
          icon={faCheck} 
          onClick={() => props.markClicked(props.item.id)}
          className="checkbox"
        />
        <TextComponent 
          className="row-item-completed"
          text={props.item.text}
        />
      </div>   
      <ButtonComponent 
        type="button" 
        className="delete-button"
        text="X"
        onClick={() => props.deleteClicked(props.item.id)}
      />
    </div>  
  )
}

export default ToDoListItemComponent;

