import React from 'react';
import {dragAndDropThunkCreator} from "../../Redux/Reducer";
import {connect} from "react-redux";

class Droppable extends React.Component {

    drop = (e) => {
        e.preventDefault();
        const dataOfTaskId = e.dataTransfer.getData(`transfer`);
        // e.target.appendChild(document.getElementById(dataOfTaskId));
        this.props.dragAndDropThunkCreator(this.props.id, dataOfTaskId);
    };

    allowDrop = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default connect(null, {dragAndDropThunkCreator})(Droppable);