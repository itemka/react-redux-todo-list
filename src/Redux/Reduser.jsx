export const SET_TODOLISTS = 'SET_TODOLISTS';
export const SET_TASKS = 'SET_TASKS';
export const ADD_TODOLIST = 'TodoList/Reduser/ADD_TODOLIST';
export const ADD_TASK = 'TodoList/Reduser/ADD_TASK';
export const DELETE_LIST_TASK = 'TodoList/Reduser/DELETE_LIST_TASK';
export const DELETE_TASK = 'TodoList/Reduser/DELETE_TASK';
export const CHANGE_OBJ = 'TodoList/Reduser/CHANGE_OBJ';

export const setTodoLists = todoLists => ({type: SET_TODOLISTS, todoLists: todoLists});
export const setTasks = (tasks, todolistId) => ({type: SET_TASKS, todolistId: todolistId, tasks: tasks});
export const addTodoList = newTodoList => ({type: ADD_TODOLIST, newTodoList: newTodoList});
export const addTask = (newTask, todolistId) => ({type: ADD_TASK, newTask, todolistId});
export const deleteListTask = (tasksId) => ({type: DELETE_LIST_TASK, tasksId: tasksId});
export const deleteTask = (todolistId, taskId) => ({type: DELETE_TASK, tasksId: todolistId, taskId: taskId});
export const changeObj = (tasksId, taskId, changeObj) => ({type: CHANGE_OBJ, tasksId, taskId, changeObj});

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
                todolists: action.todoLists.map(item => ({...item, tasks: []})),
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
                todolists: [action.newTodoList, ...state.todolists]
            }
        }
        case ADD_TASK: {
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.todolistId) return {...item, tasks: [action.newTask, ...item.tasks]};
                    else return item;
                })
            }
        }
        case DELETE_LIST_TASK: {
            return {
                ...state,
                todolists: state.todolists.filter(listTask => listTask.id !== action.tasksId),
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.todolistId) return {
                        ...item,
                        tasks: item.tasks.filter(task => task.id !== action.taskId)
                    };
                })
            }
        }
        case CHANGE_OBJ: {
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.tasksId) return {
                        ...item,
                        tasks: item.tasks.map(task => {
                            if (task.id === action.taskId) {
                                return {...task, ...action.changeObj};
                                debugger
                            } else return task;
                        })
                    };
                    else return item;
                })
            }
        }
        default:
            return state;
    }
    return state;
};
export default ToDoListsReducer;
