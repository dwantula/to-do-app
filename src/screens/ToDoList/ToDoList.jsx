import React, { PureComponent } from 'react';
import ButtonComponent from '../../shared/components/Input/Button/Button';
import InputComponent from '../../shared/components/Input/Input/Input';
import ToDoListItemComponent from './ToDoListItem/ToDoListItem';
import { generateId } from '../../shared/utils/idGenerator';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../shared/utils/LocalStorage';
import './styles.scss';

class ToDoListComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItem: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddNewItemClick = this.onAddNewItemClick.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteAllItems = this.deleteAllItems.bind(this);
  }

  componentDidMount() {
    const tasks = getItemFromLocalStorage('items') || [];
    this.setState({ items: tasks });
  }

  onInputChange(inputValue) {
    this.setState({ newItem: inputValue });
  }

  onAddNewItemClick() {
    const { items, newItem } = this.state;
    const itemToAdd = { id: generateId('item'), isCompleted: false, text: newItem};
    const newItems = [...items, itemToAdd];
    this.setState ({
      items: newItems ,
      newItem: ''
    });
    saveItemInLocalStorage('items', newItems);
   }

  markCompleted(id) {
    const index = this.state.items.findIndex(item => item.id === id);
    const newItems = [...this.state.items];
    const itemStatus = newItems[index].isCompleted;
    newItems[index].isCompleted = !itemStatus;
    this.setState({ items: newItems });
    saveItemInLocalStorage('items', newItems);
  }

  deleteItem(id) {
    const newItems = this.state.items.filter(element => element.id !== id);
    this.setState({ items: newItems });
    saveItemInLocalStorage('items', newItems);
  }

  deleteAllItems() {
    this.setState({ items: [] });
    localStorage.clear('items');
  }

  render() {
    return (
      <div className="container">
        <h2 className="title">TO DO LIST</h2>
        <div className="row">
          <InputComponent   
            type="text" 
            value={this.state.newItem} 
            onChange={this.onInputChange}
          />
          <ButtonComponent
            className="button-add-thing"
            type="button"
            text="+"
            onClick={this.onAddNewItemClick.bind(this)}
          />
        </div>
        <div>
          {this.state.items.map(item=> (
            <div key={item.id}>
            <ToDoListItemComponent 
              markClicked={this.markCompleted} 
              deleteClicked={this.deleteItem} 
              item={item} 
            />
            <p className="line"></p>
            </div>
          ))}
        </div>
        <ButtonComponent
          className="clear-button"
          type="button"
          text="Clean All"
          onClick={this.deleteAllItems}
        />
      </div>
    )
  }
}

export default ToDoListComponent;
