import axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}
});

export const API = {
    createTodoList: (newTitle) => instance.post(`todo-lists/`, {title: newTitle}),
    getTodoList: () => instance.get(`todo-lists/`),
    getTasks: (TodoListId) => instance.get(`todo-lists/${TodoListId}/tasks`),
    createTasks: (TodoListId, newTitle) => instance.post(`todo-lists/${TodoListId}/tasks`, {title: newTitle}),
    deleteTodoList: (TodoListId) => instance.delete(`todo-lists/${TodoListId}`),
    deleteTask: (TodoListId, taskId) => instance.delete(`todo-lists/tasks/${taskId}`),
    changeObjectAPI: (objects) => instance.put(`todo-lists/tasks`, objects),
    changeTodoListTitle: (todolistId, title) => instance.put(`todo-lists/${todolistId}`, {title}),
};

export const authAPI = {
    setUserDataAPI: () => instance.get(`auth/me`).then(response => response.data),
    login: (email, password, rememberMe = false) => instance.post(`auth/login`, {
        email,
        password,
        rememberMe
    }).then(response => response.data),
    logout: () => instance.delete(`auth/login`).then(response => response.data)
};