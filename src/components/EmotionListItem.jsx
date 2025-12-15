import React, { Component } from "react";
import "../App.css";
import DeleteButton from "./DeleteButton";

//add X button to remove item from list

class EmotionListItem extends Component {
    render() {
        const { name, date, color } = this.props.emotion;
        const { index, onDelete } = this.props;
        return (
            <li className="emotion-list-item" style={{ backgroundColor: color }}>
                <span>{date} - {name}
                </span>
                <DeleteButton 
                index={this.props.index} 
                onDelete={onDelete} />
            </li>
        );
    }
}

export default EmotionListItem;
