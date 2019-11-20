import React from 'react';
import css from './TodoListTasks.module.css';
import TodoListTask from "./TodoListTask/TodoListTask";
import Droppable from "../../DragAndDrop/Droppable/Droppable";

class TodoListTasks extends React.Component {
    render = () => {
        const droppableStyle = {
            height: `100%`
        };

        let tasksElements = this.props.tasks.map(task => <TodoListTask key={task.id} task={task}
                                                                       tasksId={this.props.tasksId}
                                                                       changeStatus={this.props.changeStatus}
                                                                       changeTitle={this.props.changeTitle}
                                                                       deleteTask={this.props.deleteTask}/>);
        return (
            <div className={css.TodoListTasks}>
                <Droppable id={this.props.tasksId} style={droppableStyle}>
                    {tasksElements}
                </Droppable>
            </div>
        );
    }
}

export default TodoListTasks;