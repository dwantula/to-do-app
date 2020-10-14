import React from 'react';
import TextComponent from '../../../shared/components/Input/Text/Text';
import ButtonComponent from '../../../shared/components/Input/Button/Button'
import './styl.css'

function ToDoListItemComponent(props) {
  return (
    <div className="row">
    <div className= {` ${props.item.isCompleted ? 'row-item-completed' : 'row-item'}`} >
      <ButtonComponent 
        type= "button" 
        className= "check-button"
        onClick={() => props.markClicked(props.item.id)} 
    />
      <TextComponent className="row-item-completed"text= {props.item.text} />
    </div>   
      <ButtonComponent 
        type= "button" 
        className= "delete-button"
        text="X"
        onClick={() => props.deleteClicked(props.item.id)} 
    />
    
    </div>
      
  )
}
export default ToDoListItemComponent
