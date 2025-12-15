import React, { Component } from "react";

class DeleteButton extends Component {
    handleDelete = () => {
        this.props.onDelete(this.props.index);
    };

    render() {
        return (
            <button className="delete-button" onClick={this.handleDelete}>
                X
            </button>
        );
    }
}

export default DeleteButton;