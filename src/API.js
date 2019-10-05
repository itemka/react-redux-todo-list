import axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/todo-lists/`,
    withCredentials: true,
    headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}
});

export const api = {
    createTodoList(newTitle) {
        return instance.post(``, {title: newTitle})
    },
    getTodoList() {
        return instance.get(``)
    },
    getTasks(TodoListId) {
        return instance.get(`${TodoListId}/tasks`)
    },
    createTasks(TodoListId, newTitle) {
        return instance.post(`${TodoListId}/tasks`, {title: newTitle})
    },
    deleteTodoList(TodoListId) {
        return instance.delete(`${TodoListId}`)
    },
    deleteTask(TodoListId, taskId) {
        return instance.delete(`tasks/${taskId}`)
    },
    changeObjectAPI(objects) {
        return instance.put(`tasks`, objects)
    }
};