import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTask, setTasks, deleteListTask, deleteTask, changeObj} from "./Redux/Reduser";
import axios from 'axios';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.newTasksTitileRef = React.createRef();
    }

    componentDidMount() {
        this.restoreState();
    }

    // _restoreState = () => {
    //     // объявляем наш стейт стартовый
    //     let state = this.state;
    //     // считываем сохранённую ранее строку из localStorage
    //     let stateAsString = localStorage.getItem("our-state-" + this.props.id);
    //     // а вдруг ещё не было ни одного сохранения?? тогда будет null.
    //     // если не null, тогда превращаем строку в объект
    //     if (stateAsString !== null) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
    //     this.setState(state, () => {
    //         this.state.tasks.forEach(t => {
    //             if (t.id >= this.nextTaskId) {
    //                 this.nextTaskId = t.id + 1;
    //             }
    //         })
    //     });
    // };

    // _addTask = (newText) => {
    //     let newTask = {
    //         id: this.nextTaskId,
    //         title: newText,
    //         isDone: false,
    //         priority: "low"
    //     };
    //     // инкрементим (увеличим) id следующей таски, чтобы при следюущем добавлении, он был на 1 больше
    //     this.nextTaskId++;
    //     // let newTasks = [...this.state.tasks, newTask];
    //     // this.setState({
    //     //     tasks: newTasks
    //     // }, () => {
    //     //     this.saveState();
    //     // });
    //     this.props.addTask(newTask, this.props.id);
    //     console.log(newTask);
    // };

    saveState = () => {
        // переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        // сохраняем нашу строку в localStorage под ключом "our-state"
        localStorage.setItem("our-state-" + this.props.id, stateAsString);
    };

    nextTaskId = 0;
    state = {
        tasks: [],
        filterValue: "All",
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue}, () => {
            this.saveState();
        });
    };

    restoreState = () => {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}/tasks`,
            {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
            .then(response => {
                console.log(response);
                this.props.setTasks(response.data.items, this.props.id);
            })
    };

    addNewTask = (newText) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}/tasks`,
            {title: newText},
            {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
            .then(response => {
                this.props.addTask(response.data.data.item, this.props.id);
            })
    };

    deleteListTask = (todoListId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todoListId}`,
            {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
            .then(response => {
                this.props.deleteListTask(todoListId)
            })
    };

    deleteTask = (todolistId, taskId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/tasks/${taskId}`,
            {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
            .then(response => {
                this.props.deleteTask(todolistId, taskId);
            })
    };

    changeObjectAPI = (taskId, object) => {
        let task = this.props.tasks.find(item => item.id === taskId);
        let newTask = {...task, ...object};
        axios.put(`https://social-network.samuraijs.com/api/1.0/todo-lists/tasks/`, newTask,
            {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
            .then(response => {
                this.props.changeObject(this.props.id, taskId, object)
            })
    };

    changeTask = (taskId, obj) => this.changeObjectAPI(taskId, obj);
    changeStatus = (taskId, isDone) => this.changeTask(taskId, {status: isDone});
    changeTitle = (taskId, title) => this.changeTask(taskId, {title: title});

    render = () => {

        const {tasks = []} = this.props;

        return (
            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle title={this.props.title} todoListId={this.props.id}
                                   deleteListTask={() => this.deleteListTask(this.props.id)}/>
                    <AddNewItemForm addItem={this.addNewTask}/>
                </div>

                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               tasksId={this.props.id}
                               deleteTask={this.deleteTask}
                               tasks={tasks.filter(t => {
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return t.status === 0;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.status === 2;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (newTask, todolistId) => dispatch(addTask(newTask, todolistId)),
        setTasks: (tasks, todolistId) => dispatch(setTasks(tasks, todolistId)),
        deleteListTask: todolistId => dispatch(deleteListTask(todolistId)),
        deleteTask: (todolistId, taskId) => dispatch(deleteTask(todolistId, taskId)),
        changeObject: (tasksId, taskId, changeObject) => dispatch(changeObj(tasksId, taskId, changeObject)),
    }
};

const ConnectTodoList = connect(null, mapDispatchToProps)(TodoList);
export default ConnectTodoList;

