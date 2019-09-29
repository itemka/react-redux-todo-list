import React from 'react';
import './App.css';

class TodoListTitle extends React.Component {
    render = () => {
        return (
            <div>
                <h3 className={`todoList-header_title center`}>{this.props.title}
                    <button className={`button`} onClick={this.props.deleteListTask}>X</button>
                </h3>
            </div>
        );
    }
}

export default TodoListTitle;

