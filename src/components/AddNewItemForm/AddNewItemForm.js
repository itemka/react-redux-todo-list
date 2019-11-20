import React from 'react';
import css from './AddNewItemForm.module.css';
import Button from "../Button/Button";

class AddNewItemForm extends React.Component {
    state = {
        error: false,
        title: ''
    };

    onAddItemClick = () => {
        let newText = this.state.title;
        this.setState({title: ''});

        if (newText === "") {
            this.setState({error: true});
        } else {
            this.setState({error: false});
            // передаём новый текст наружу
            this.props.addItem(newText);
        }
    };

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        });
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") this.onAddItemClick();
    };

    render = () => {
        let classNameForInput = this.state.error ? `${css.classNameForInput} ${css.error}` : `${css.classNameForInput}`;
        return (
            <div className={css.newTaskForm}>
                <input className={classNameForInput} type="text" placeholder="New item name"
                       onChange={this.onTitleChanged}
                       onKeyPress={this.onKeyPress}
                       value={this.state.title}
                />
                <Button buttonCallBack={this.onAddItemClick.bind(this)} title={`Add`}/>
            </div>
        );
    }
}

export default AddNewItemForm;