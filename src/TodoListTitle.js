import React from 'react';
import './App.css';

class TodoListTitle extends React.Component {
    render = () => {
        return (
            <div>
                <div>
                    <button className={`button`} onClick={this.props.deleteListTask}>X</button>
                </div>
                <div>
                    <h3 className={`todoList-header_title center`}>{this.props.title}</h3>
                </div>
            </div>
        );
    }
}

export default TodoListTitle;

