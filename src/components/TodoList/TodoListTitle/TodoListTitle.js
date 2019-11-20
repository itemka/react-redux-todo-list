import React from 'react';
import css from './TodoListTitle.module.css';
import button from './../../Button/Button.module.css';

class TodoListTitle extends React.Component {
    state = {
        editMode: false,
        title: this.props.title
    };
    changeTitle = e => {
        this.setState({title: e.currentTarget.value})
    };
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.changeTodoLIstTitle(this.state.title);
    };
    activateEditMode = () => {
        this.setState({editMode: true});
    };
    render = () => {
        return (
            <div>
                <div>
                    <button className={button.button} onClick={this.props.deleteListTask}>X</button>
                </div>
                <div>
                    <h3 className={`${css.title} ${css.center}`}>
                        {this.state.editMode
                            ? <input onBlur={this.deactivateEditMode}
                                     onChange={this.changeTitle}
                                     type="text"
                                     autoFocus={true}
                                     value={this.state.title}/>
                            : <span onClick={this.activateEditMode}>{this.props.title}</span>}
                    </h3>
                </div>
            </div>
        );
    }
}

export default TodoListTitle;

