import React, { Component } from "react";
import "../App.css";
import DeleteButton from "./DeleteButton";

//add X button to remove item from list
//add text description and edit button

//change button classes?
//later

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
                <p> {/*maybe empty, may be not*/} </p>
            </li>
            
        );
    }
}

export default EmotionListItem;
