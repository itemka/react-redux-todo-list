import React from 'react';
import css from './TodoListTasks.module.css';
import TodoListTask from "./TodoListTask/TodoListTask";
import Droppable from "../../DragAndDrop/Droppable/Droppable";

const TodoListTasks = (props) => {
    const droppableStyle = {
        height: `100%`
    };
    let tasksElements = props.tasks.map(task => <TodoListTask key={task.id} task={task} changeTitle={props.changeTitle}
                                                              changeStatus={props.changeStatus} tasksId={props.tasksId}
                                                              deleteTask={props.deleteTask}
    />);
    return (
        <div className={css.TodoListTasks}>
            <Droppable id={props.tasksId} style={droppableStyle}>
                {tasksElements}
            </Droppable>
        </div>
    );
};

export default TodoListTasks;