import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Button from "./Button";
import {ChangeIsDone, ChangeTitleTask, DeleteTask} from "./Redux/Reduser";

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
        changeTitle: (tasksId, taskId, changeValue) => dispatch(ChangeTitleTask(tasksId, taskId, changeValue)),
        deleteTask: (tasksId, taskId) => dispatch(DeleteTask(tasksId, taskId)),
        changeIsDone: (tasksId, taskId, changeIsDone) => dispatch(ChangeIsDone(tasksId, taskId, changeIsDone))
    }
};

const ConnectTodoListTask = connect(mapStateToProps, mapDispatchToProps)(TodoListTask);
export default ConnectTodoListTask;

