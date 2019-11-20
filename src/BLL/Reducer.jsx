import {API} from "../DAL/API";

export const SET_TODOLISTS = 'SET_TODOLISTS';
export const SET_TASKS = 'SET_TASKS';
export const ADD_TODOLIST = 'TodoList/Reduser/ADD_TODOLIST';
export const ADD_TASK = 'TodoList/Reduser/ADD_TASK';
export const DELETE_LIST_TASK = 'TodoList/Reduser/DELETE_LIST_TASK';
export const DELETE_TASK = 'TodoList/Reduser/DELETE_TASK';
export const CHANGE_OBJ = 'TodoList/Reduser/CHANGE_OBJ';
export const CHANGE_TODOLIST_TITLE = 'TodoList/Reduser/CHANGE_TODOLIST_TITLE';


export const setTodoLists = todoLists => ({type: SET_TODOLISTS, todoLists: todoLists});
export const setTasks = (tasks, todolistId) => ({type: SET_TASKS, todolistId: todolistId, tasks: tasks});
export const addTodoList = newTodoList => ({type: ADD_TODOLIST, newTodoList: newTodoList});
export const addTask = (newTask, todolistId) => ({type: ADD_TASK, newTask, todolistId});
export const deleteListTask = (tasksId) => ({type: DELETE_LIST_TASK, tasksId: tasksId});
export const deleteTask = (todolistId, taskId) => ({type: DELETE_TASK, todolistId, taskId});
export const changeObj = (tasksId, taskId, changeObj) => ({type: CHANGE_OBJ, tasksId, taskId, changeObj});
export const changeTodoListTitleAC = (todolistId, title) => ({type: CHANGE_TODOLIST_TITLE, todolistId, title});


export const addTodoListThunkCreator = (title) => async dispatch => {
    let response = await API.createTodoList(title);
    dispatch(addTodoList(response.data.data.item));
};
export const setTodoListsThunkCreator = () => async dispatch => {
    let response = await API.getTodoList();
    dispatch(setTodoLists(response.data));
};
export const addTaskThunkCreator = (newTitle, todolistId) => async dispatch => {
    let response = await API.createTasks(todolistId, newTitle);
    dispatch(addTask(response.data.data.item, todolistId));
};
export const setTasksThunkCreator = (todolistId) => async dispatch => {
    let response = await API.getTasks(todolistId);
    dispatch(setTasks(response.data.items, todolistId));
};
export const deleteListTaskThunkCreator = (todoListId) => async dispatch => {
    await API.deleteTodoList(todoListId);
    dispatch(deleteListTask(todoListId));
};
export const deleteTaskThunkCreator = (todolistId, taskId) => async dispatch => {
    await API.deleteTask(todolistId, taskId);
    dispatch(deleteTask(todolistId, taskId));
};
export const changeTodoListTitleACThunkCreator = (todolistId, title) => async dispatch => {
    await API.changeTodoListTitle(todolistId, title);
    dispatch(changeTodoListTitleAC(todolistId, title));
};
export const changeObjectThunkCreator = (todolistId, taskId, obj) => (dispatch, getState) => {
    getState().partState.todolists.find(item => item.id === todolistId).tasks.forEach(el => {
        if (el.id === taskId) {
            API.changeObjectAPI({...el, ...obj}).then(response => {
                dispatch(changeObj(todolistId, taskId, obj))
            })
        }
    });
};

export const dragAndDropThunkCreator = (dropTodolistId, dndId) => async (dispatch, getState) => {
    let beforDndTodolistId = '';
    let beforDndTaskId = '';
    let beforDndTitle = '';
    await getState().partState.todolists.map(item => {
        item.tasks.map(el => {
            if (el.id === dndId) {
                beforDndTodolistId = item.id;
                beforDndTaskId = el.id;
                beforDndTitle = el.title;
            }
        });
    });
    dispatch(addTaskThunkCreator(beforDndTitle, dropTodolistId));
    dispatch(deleteTaskThunkCreator(beforDndTodolistId, beforDndTaskId));
};


const initialState = {
    todolists: [
        // {
        //     id: 0, title: "sdfg", tasks: [
        //         {id: 0, title: "afdg", isDone: false, priority: "low"},
        //         {id: 1, title: "dfgdgd", isDone: false, priority: "low"},
        //         {id: 2, title: "fg", isDone: false, priority: "low"},
        //     ]
        // },
    ],
    buttonTitle: 'X',
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
                    if (item.id === action.todolistId) {
                        return {...item, tasks: [...item.tasks.filter(task => task.id !== action.taskId)]};
                    } else return item;
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
                            if (task.id === action.taskId) return {...task, ...action.changeObj};
                            else return task;
                        })
                    };
                    else return item;
                })
            }
        }
        case CHANGE_TODOLIST_TITLE: {
            return {
                ...state,
                todolists: state.todolists.map(item => {
                    if (item.id === action.todolistId) return {...item, title: action.title};
                    else return item;
                })
            }
        }
        default:
            return state;
    }
};
export default ToDoListsReducer;
