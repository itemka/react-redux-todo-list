export const ADD_TODOLIST = 'TodoList/Reduser/ADD_TODOLIST';
export const ADD_TASK = 'TodoList/Reduser/ADD_TASK';
export const CHANGE_TITLE_TASK = 'TodoList/Reduser/CHANGE_TITLE_TASK';
export const DELETE_TASK = 'TodoList/Reduser/DELETE_TASK';
export const DELETE_LIST_TASK = 'TodoList/Reduser/DELETE_LIST_TASK';
export const CHANGE_ISDONE = 'TodoList/Reduser/CHANGE_ISDONE';
export const SET_TODOLISTS = 'SET_TODOLISTS';
export const SET_TASKS = 'SET_TASKS';

export const addTodoList = newTodoList => ({type: ADD_TODOLIST, newTodoList: newTodoList});
export const addTask = (newTask, todolistId) => ({type: ADD_TASK, newTask, todolistId});
export const changeTitleTask = (tasksId, taskId, changeValue) => ({
    type: CHANGE_TITLE_TASK, tasksId, taskId, changeValue
});
export const deleteTask = (tasksId, taskId) => ({type: DELETE_TASK, tasksId: tasksId, taskId: taskId});
export const deleteListTask = (tasksId) => ({type: DELETE_LIST_TASK, tasksId: tasksId});
export const changeIsDone = (tasksId, taskId, changeIsDone) => ({
    type: CHANGE_ISDONE, tasksId: tasksId, taskId: taskId, changeIsDone: changeIsDone
});
export const setTodoLists = todoLists => ({type: SET_TODOLISTS, todoLists: todoLists});
export const setTasks = (todolistId, tasks) => ({type: SET_TASKS, todolistId: todolistId, tasks: tasks});

const initialState = {
    todolists: [
        // {
        //     id: 0, title: "sdfg", tasks: [
        //         {id: 0, title: "afdg", isDone: false, priority: "low"},
        //         {id: 1, title: "dfgdgd", isDone: false, priority: "low"},
        //         {id: 2, title: "fg", isDone: false, priority: "low"},
        //     ]
        // },
        // {
        //     id: 1, title: "sd", tasks: [
        //         {id: 0, title: "afdg", isDone: false, priority: "low"},
        //         {id: 1, title: "dfgdgd", isDone: false, priority: "low"},
        //     ]
        // },
        // {
        //     id: 2, title: "fg", tasks: [
        //         {id: 0, title: "afdg", isDone: false, priority: "low"},
        //     ]
        // }
    ],
    buttonTitle: 'X'
};

const ToDoListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.todoLists,
            };
        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.todolistId) return {...item, tasks: action.tasks};
                    else return item;
                })
            };
        case ADD_TODOLIST: {
            return {
                ...state,
                todolists: [...state.todolists, {id: state.todolists.length, title: action.newTodoList, tasks: []}]
            }
        }
        case ADD_TASK: {
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
        case CHANGE_TITLE_TASK: {
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
        case DELETE_TASK: {
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
        case DELETE_LIST_TASK: {
            return {
                ...state,
                todolists: state.todolists.filter(listTask => {
                    if (listTask.id !== action.tasksId) return true;
                    else return false;
                })
            }
        }
        case CHANGE_ISDONE: {
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.tasksId)
                        return {
                            ...item,
                            tasks: item.tasks.map(task => {
                                if (task.id === action.taskId) {
                                    return {
                                        ...task, isDone: action.changeIsDone
                                    };
                                } else
                                    return task;
                            })
                        };
                    else
                        return item;
                })
            }
        }
        default:
            return state
    }
    return state;
};
export default ToDoListsReducer;
