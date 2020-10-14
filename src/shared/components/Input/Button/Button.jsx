import React, { PureComponent } from 'react';
import './style.css'

class ButtonComponent extends PureComponent {
  render() {
    return (
      <button
        className={this.props.className}
        type={this.props.type}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    )
  }
}

export default ButtonComponent;
