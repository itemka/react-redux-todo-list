import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.map( task => <TodoListTask key={task.id} task={task} tasksId={this.props.tasksId}
                                                                        changeStatus={this.props.changeStatus}
                                                                        changeTitle={this.props.changeTitle}
                                                                        />);
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

