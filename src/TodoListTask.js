import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,
    };

    onIsDoneChanged = event => {
        this.props.changeStatus(this.props.task.id, event.currentTarget.checked ? 2 : 0, true);
    };

    onTitleChangedEventSendTitleRedux = event => {
        this.props.changeTitle(this.props.task.id, event.currentTarget.value, false);
    };
    onTitleChangedAPI = title => {
        this.props.changeTitle(this.props.task.id, title, true);
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.onTitleChangedAPI(this.props.task.title);
    };
    onDeleteTask = () => {
        this.props.deleteTask(this.props.tasksId, this.props.task.id)
    };

    render = () => {
        let containerCssClass = this.props.task.status === 2 ? "todoList-task done" : "todoList-task";
        return (
            <div className={`${containerCssClass} todoList-task`}>
                <input type="checkbox" checked={this.props.task.status} onChange={this.onIsDoneChanged}/>{'   '}
                <span className={`taskText`}>
                    {this.state.editMode
                        ? <input onBlur={this.deactivateEditMode}
                                 onChange={this.onTitleChangedEventSendTitleRedux}
                                 autoFocus={true}
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