import React from 'react';
import css from './TodoList.module.css';
import TodoList from "./../../components/TodoList/TodoList.js";
import AddNewItemForm from "./../../components/AddNewItemForm/AddNewItemForm";
import {connect} from "react-redux";
import {addTodoListThunkCreator, setTodoListsThunkCreator} from "./../../BLL/Reducer";
import LogOut from "./../../components/LogOut/LogOut";
import {checkUserDataThunkCreator} from "./../../BLL/AuthReducer";

class TodoListPage extends React.Component {
    componentDidMount() {
        this.props.checkUserDataThunkCreator();
        this.restoreState();
    }

    nextTodoListId = 0;
    state = {
        todolists: []
    };

    addTodoList = (title) => this.props.addTodoListThunkCreator(title);
    restoreState = () => this.props.setTodoListsThunkCreator();

    _addTodoList = (title) => {
        let newTodoList = {
            id: this.nextTodoListId,
            title: title
        };
        // this.setState({todolists: [...this.state.todolists, newTodoList]}, () => {
        //     this.saveState();
        // });
        // this.nextTodoListId++;
    };
    saveState = () => {
        // переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        // сохраняем нашу строку в localStorage под ключом "our-state"
        localStorage.setItem("todolists-state", stateAsString);
    };
    _restoreState = () => {
        // объявляем наш стейт стартовый
        let state = this.state;
        // считываем сохранённую ранее строку из localStorage
        let stateAsString = localStorage.getItem("todolists-state");
        // а вдруг ещё не было ни одного сохранения?? тогда будет null.
        // если не null, тогда превращаем строку в объект
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
        }
        // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
        this.setState(state, () => {
            this.state.todolists.forEach(t => {
                if (t.id >= this.nextTodoListId) {
                    this.nextTodoListId = t.id + 1;
                }
            })
        });
    };

    render = () => {
        let todolists = this.props.todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title}
                                                                 tasks={tl.tasks}/>);
        return (
            <>
                <LogOut/>
                <div className={css.center}><AddNewItemForm addItem={this.addTodoList.bind(this)}/></div>
                <div className={css.MainComponentTodoList}>{todolists}</div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    todolists: state.partState.todolists,
});
export default connect(mapStateToProps, {
    addTodoListThunkCreator,
    setTodoListsThunkCreator,
    checkUserDataThunkCreator
})(TodoListPage);