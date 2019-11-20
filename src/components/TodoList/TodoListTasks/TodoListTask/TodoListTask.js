import React, {useState} from 'react';
import '../../../../App.css';
import css from './TodoListTask.module.css';
import button from './../../../Button/Button.module.css';
import Draggable from "../../../DragAndDrop/Draggable/Draggable";

const TodoListTask = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [taskTitle, setTaskTitle] = useState(props.task.title);
    let onIsDoneChanged = event => props.changeStatus(props.task.id, event.currentTarget.checked ? 2 : 0);
    let updateTitle = event => setTaskTitle(event.currentTarget.value);
    let activateEditMode = () => setEditMode(true);
    let deactivateEditMode = () => {
        setEditMode(false);
        props.changeTitle(props.task.id, taskTitle);
    };
    let onDeleteTask = () => props.deleteTask(props.tasksId, props.task.id);

    let containerCssClass = props.task.status === 2 ? `${css.todoListTask} ${css.done}` : `${css.todoListTask}`;
    return (
        <Draggable id={props.task.id}>
            <div className={`${containerCssClass} ${css.todoListTask}`}>
                <input type="checkbox" checked={props.task.status} onChange={onIsDoneChanged}/>{'   '}
                <span className={css.taskText}>
                    {editMode
                        ? <input onBlur={deactivateEditMode}
                                 onChange={updateTitle}
                                 autoFocus={true}
                                 value={taskTitle}/>
                        : <span onClick={activateEditMode}>{props.task.title}</span>
                    }
                </span>{'   '}
                <span className={css.priority}> (priority: {props.task.priority})</span>
                <button className={button.button} onClick={onDeleteTask}>X</button>
            </div>
        </Draggable>
    );
};

export default TodoListTask;