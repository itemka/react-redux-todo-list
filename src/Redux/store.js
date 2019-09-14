import {createStore} from "redux";

const initialState = {
    todolists: [
        {
            id: 0, title: "sdfg", tasks: [
                {id: 0, title: "afdg", isDone: false, priority: "low"},
                {id: 1, title: "dfgdgd", isDone: false, priority: "low"},
                {id: 2, title: "fg", isDone: false, priority: "low"},
            ]
        },
        {
            id: 1, title: "sd", tasks: [
                {id: 0, title: "afdg", isDone: false, priority: "low"},
                {id: 1, title: "dfgdgd", isDone: false, priority: "low"},
            ]
        },
        {
            id: 2, title: "fg", tasks: [
                {id: 0, title: "afdg", isDone: false, priority: "low"},
            ]
        }
    ],
    buttonTitle: 'X'
};

const ToDoListsReducer = (state = initialState, action) => {

    switch (action.type) {
        case `ADD_TODOLIST`: {
            return {
                ...state,
                todolists: [...state.todolists, {id: state.todolists.length, title: action.newTodoList, tasks: []}]
            }
        }
        case `ADD_TASK`: {
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.todolistId)
                        return {...item, tasks: [...item.tasks, action.newTask]};
                    else
                        return item;
                })
            }
        }
        case `CHANGE_TITLE_TASK`: {
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.tasksId)
                        return {
                            ...item, tasks: item.tasks.map(task => {
                                if (task.id === action.taskId)
                                    return {
                                        ...task, title: action.changeValue
                                    };
                                else
                                    return task;
                            })
                        };
                    else
                        return item;
                })
            }
        }
        case `DELETE_TASK`: {
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.tasksId) {
                        return {
                            ...item,
                            tasks: item.tasks.filter(task => {
                                if (task.id !== action.taskId) return true;
                                else return false;
                            })
                        }
                    } else {
                        return item;
                    }
                })
            }
        }
        case `DELETE_LIST_TASK`: {
            return {
                ...state,
                todolists: state.todolists.filter(listTask => {
                    if (listTask.id !== action.tasksId) return true;
                    else return false;
                })
            }
        }
        default:
            return state
    }
    return state;
};


const store = createStore(ToDoListsReducer);
export default store;
