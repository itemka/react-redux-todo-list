import React from "react";
import Droppable from "../Droppable/Droppable";
import Draggable from "../Draggable/Draggable";

const Wrapper = {
    width: `100%`,
    padding: `32px`,
    display: `flex`,
    justifyContent: `center`,
};

const Item = {
    padding: `8px`,
    color: `#555`,
    backgroundColor: `white`,
    borderRadius: `3px`,
};

const droppableStyle = {
    backgroundColor: `#555`,
    width: `250px`,
    height: `400px`,
    margin: `32px`,
};

export default class TryDnd extends React.Component {
    render() {
        return (
            <div style={Wrapper}>
                <Droppable id={`dr1`} style={droppableStyle}>
                    <Draggable id={`item1`} style={{margin: `8px`}}>
                        <div style={Item}>Some text</div>
                    </Draggable>
                    <Draggable id={`item2`} style={{margin: `8px`}}>
                        <div style={Item}>Some other text</div>
                    </Draggable>
                </Droppable>

                <Droppable id={`dr1`} style={droppableStyle}>

                </Droppable>
            </div>
        );
    }
}