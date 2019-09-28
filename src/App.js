import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodoList, setTodoLists} from "./Redux/Reduser";
import axios from "axios";

class App extends React.Component {
    componentDidMount() {
        this.restoreState();
    }

    nextTodoListId = 0;
    state = {
        todolists: []
    };

    addTodoList = (title) => {
        let newTodoList = {
            id: this.nextTodoListId,
            title: title
        };
        this.setState({todolists: [...this.state.todolists, newTodoList]}, () => {
            this.saveState();
        });
        this.nextTodoListId++;
    };


    saveState = () => {
        // переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        // сохраняем нашу строку в localStorage под ключом "our-state"
        localStorage.setItem("todolists-state", stateAsString);
    };

    restoreState = () => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/todo-lists`,
                {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}}
            )
            .then(response => {
                this.props.setTodoLists(response.data)
            })
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
        let todolists = this.props.todolists.map(todoList => <TodoList key={todoList.id} id={todoList.id}
                                                                       title={todoList.title}
                                                                       tasks={todoList.tasks}/>);
        return (
            <>
                <div className={`center`}>
                    <AddNewItemForm addItem={this.props.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        todolists: state.todolists
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addTodoList: newTodoList => {
            dispatch(addTodoList(newTodoList));
        },
        setTodoLists: todoLists => dispatch(setTodoLists(todoLists)),
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

