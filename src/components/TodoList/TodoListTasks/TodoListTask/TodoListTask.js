import React from 'react';
import '../../../../App.css';
import css from './TodoListTask.module.css';
import button from './../../../Button/Button.module.css';
import Draggable from "./../../../../Dnd/Draggable/Draggable";

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        taskTitle: this.props.task.title,
    };

    onIsDoneChanged = event => this.props.changeStatus(this.props.task.id, event.currentTarget.checked ? 2 : 0);

    updateTitle = event => {
        /*this.props.changeTitle(this.props.task.id, event.currentTarget.value);*/
        this.setState({taskTitle: event.currentTarget.value});
    };

    activateEditMode = () => this.setState({editMode: true});
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.changeTitle(this.props.task.id, this.state.taskTitle);
    };
    onDeleteTask = () => this.props.deleteTask(this.props.tasksId, this.props.task.id);

    render = () => {
        let containerCssClass = this.props.task.status === 2 ? `${css.todoListTask} ${css.done}` : `${css.todoListTask}`;
        return (
            <Draggable id={this.props.task.id}>
                <div className={`${containerCssClass} ${css.todoListTask}`}>
                    <input type="checkbox" checked={this.props.task.status} onChange={this.onIsDoneChanged}/>{'   '}
                    <span className={css.taskText}>
                    {this.state.editMode
                        ? <input onBlur={this.deactivateEditMode}
                                 onChange={this.updateTitle}
                                 autoFocus={true}
                                 value={this.state.taskTitle}/>
                        : <span onClick={this.activateEditMode}>{this.props.task.title}</span>
                    }
                </span>{'   '}
                    <span className={css.priority}> (priority: {this.props.task.priority})</span>
                    <button className={button.button} onClick={this.onDeleteTask}>X</button>
                </div>
            </Draggable>
        );
    }
}

export default TodoListTask;