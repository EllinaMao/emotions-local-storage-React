import React, { Component } from "react";
import "../App.css";
 
class EmotionButton extends Component {
  handleClick = () => {
    this.props.onSelect(this.props.emotion);
  };
 
  render() {
    const { name, color } = this.props.emotion;
    return (
      <button
        className="emotion-button"
        style={{ backgroundColor: color }}
        onClick={this.handleClick}
      >
        {name}
      </button>
    );
  }
}
 
export default EmotionButton;
