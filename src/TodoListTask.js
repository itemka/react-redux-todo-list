import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Button from "./Button";

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        // this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
        this.props.changeIsDone(this.props.tasksId, this.props.task.id, e.currentTarget.checked)
    };
    onTitleChanged = (e) => {
        // this.props.changeTitle(this.props.task.id, e.currentTarget.value);
        this.props.changeTitle(this.props.tasksId, this.props.task.id, e.currentTarget.value);
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


    render = () => {

        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className={containerCssClass}>
                <input type="checkbox" checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                <span className={`taskText`}>
                    {this.state.editMode
                        ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
                                 value={this.props.task.title}/>
                        : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title}</span>
                    },
                </span>
                <span>
                    priority: {this.props.task.priority}
                </span>
                <Button buttonCallBack={() => this.props.deleteTask(this.props.tasksId, this.props.task.id)}
                        title={this.props.buttonTitle}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        buttonTitle: state.buttonTitle,

    }
};
const mapDispatchToProps = dispatch => {
    return {
        changeTitle: (tasksId, taskId, changeValue) => dispatch({
            type: 'CHANGE_TITLE_TASK',
            tasksId,
            taskId,
            changeValue
        }),
        deleteTask: (tasksId, taskId) => dispatch({type: 'DELETE_TASK', tasksId: tasksId, taskId: taskId}),
        changeIsDone: (tasksId, taskId, changeIsDone) => dispatch({
            type: 'CHANGE_ISDONE',
            tasksId: tasksId,
            taskId: taskId,
            changeIsDone: changeIsDone
        })
    }
};

const ConnectTodoListTask = connect(mapStateToProps, mapDispatchToProps)(TodoListTask);
export default ConnectTodoListTask;

