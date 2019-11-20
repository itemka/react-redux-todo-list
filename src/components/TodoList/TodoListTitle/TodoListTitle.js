import React, {useState} from 'react';
import css from './TodoListTitle.module.css';
import button from './../../Button/Button.module.css';

const TodoListTitle = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.title);
    let changeTitle = e => setTitle(e.currentTarget.value);
    let deactivateEditMode = () => {
        setEditMode(false);
        props.changeTodoLIstTitle(title);
    };
    let activateEditMode = () => setEditMode(true);
    return (
        <div>
            <button className={button.button} onClick={props.deleteListTask}>X</button>
            <div>
                <h3 className={`${css.title} ${css.center}`}>
                    {editMode
                        ? <input onBlur={deactivateEditMode}
                                 onChange={changeTitle}
                                 type="text"
                                 autoFocus={true}
                                 value={title}/>
                        : <span onClick={activateEditMode}>{props.title}</span>}
                </h3>
            </div>
        </div>
    );
};

export default TodoListTitle;