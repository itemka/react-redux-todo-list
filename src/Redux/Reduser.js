export const ADD_TODOLIST = 'TodoList/Reduser/ADD_TODOLIST';
export const ADD_TASK = 'TodoList/Reduser/ADD_TASK';
export const CHANGE_TITLE_TASK = 'TodoList/Reduser/CHANGE_TITLE_TASK';
export const DELETE_TASK = 'TodoList/Reduser/DELETE_TASK';
export const DELETE_LIST_TASK = 'TodoList/Reduser/DELETE_LIST_TASK';
export const CHANGE_ISDONE = 'TodoList/Reduser/CHANGE_ISDONE';

export const AddTodoList = (newTodoList) => {
    return {type: ADD_TODOLIST, newTodoList: newTodoList}
};
export const AddTask = (newTask, todolistId) => {
    return {type: ADD_TASK, newTask, todolistId}
};
export const ChangeTitleTask = (tasksId, taskId, changeValue) => {
    return { type: CHANGE_TITLE_TASK, tasksId, taskId, changeValue }
};
export const DeleteTask = (tasksId, taskId) => {
    return {type: DELETE_TASK, tasksId: tasksId, taskId: taskId}
};
export const DeleteListTask = (tasksId) => {
    return {type: DELETE_LIST_TASK, tasksId: tasksId}
};
export const ChangeIsDone = (tasksId, taskId, changeIsDone) => {
    return { type: CHANGE_ISDONE, tasksId: tasksId, taskId: taskId, changeIsDone: changeIsDone }
};

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
