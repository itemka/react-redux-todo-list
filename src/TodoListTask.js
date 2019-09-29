import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
    };

    onDeleteTask = () => {
        this.props.deleteTask(this.props.tasksId, this.props.task.id)
    };

    render = () => {
        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
            <div className={`${containerCssClass} todoList-task`}>
                <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>{'   '}
                <span className={`taskText`}>
                    {this.state.editMode
                        ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
                                 value={this.props.task.title}/>
                        : <span onClick={this.activateEditMode}>{/*this.props.task.id*/}{this.props.task.title}</span>
                    }
                </span>{'   '}
                <span className={`priority`}> (priority: {this.props.task.priority})</span>
                <button className={`button`} onClick={this.onDeleteTask}>X</button>
            </div>
        );
    }
}

export default TodoListTask;

