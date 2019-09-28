import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTask, setTasks} from "./Redux/Reduser";
import axios from 'axios';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.newTasksTitileRef = React.createRef();
    }
b
    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        // переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        // сохраняем нашу строку в localStorage под ключом "our-state"
        localStorage.setItem("our-state-" + this.props.id, stateAsString);
    };

    restoreState = () => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}/tasks`,
                {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}}
            )
            .then(respons=>{
                this.props.setTasks(this.props.id, respons.data.items);
            })
    };

    _restoreState = () => {
        // объявляем наш стейт стартовый
        let state = this.state;
        // считываем сохранённую ранее строку из localStorage
        let stateAsString = localStorage.getItem("our-state-" + this.props.id);
        // а вдруг ещё не было ни одного сохранения?? тогда будет null.
        // если не null, тогда превращаем строку в объект
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
        // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
        this.setState(state, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1;
                }
            })
        });
    };

    nextTaskId = 0;
    state = {
        tasks: [],
        filterValue: "All"
    };

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        // инкрементим (увеличим) id следующей таски, чтобы при следюущем добавлении, он был на 1 больше
        this.nextTaskId++;
        // let newTasks = [...this.state.tasks, newTask];
        // this.setState({
        //     tasks: newTasks
        // }, () => {
        //     this.saveState();
        // });
        this.props.addTask(newTask, this.props.id);
        console.log(newTask);
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => {
            this.saveState();
        });
    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }
        });

        this.setState({tasks: newTasks}, () => {
            this.saveState();
        });
    };
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    };
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    };


    render = () => {
        const {tasks = []} = this.props;
        return (

            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle title={this.props.title} tasksId={this.props.id}/>
                    <AddNewItemForm addItem={this.addTask}/>
                </div>

                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               tasksId={this.props.id}
                               tasks={tasks.filter(t => {
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return t.isDone === false;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.isDone === true;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {}
};
const mapDispatchToProps = dispatch => {
    return {
        addTask: (newTask, todolistId) => dispatch(addTask(newTask, todolistId)),
        setTasks: (todolistId, tasks) => dispatch(setTasks(todolistId, tasks)),
    }
};

const ConnectTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default ConnectTodoList;

