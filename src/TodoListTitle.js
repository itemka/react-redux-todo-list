import React from 'react';
import './App.css';
import Button from "./Button";
import {connect} from "react-redux";
import {deleteListTask} from "./Redux/Reduser";

class TodoListTitle extends React.Component {
    render = () => {
        return (
            <div>
                <h3 className={`todoList-header_title center`}>{this.props.title}
                    <Button
                        buttonCallBack={() => this.props.deleteListTask(this.props.tasksId)}
                        title={this.props.buttonTitle}/>
                </h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        buttonTitle: state.buttonTitle
    }
};
const mapDispatchToProps = dispatch => {
    return {
        deleteListTask: tasksId => dispatch(deleteListTask(tasksId))
    }
};

const ConnectTodoListTitle = connect(mapStateToProps, mapDispatchToProps)(TodoListTitle);
export default ConnectTodoListTitle;

