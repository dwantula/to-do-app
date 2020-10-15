import React, { PureComponent } from 'react'
import './styles.scss'

class InputComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <input className="input-add-item" placeholder="Write down what you want to do..." type={this.props.type} value={this.props.value} onChange={this.handleChange}></input>
    )
  }
}

export default InputComponent;
