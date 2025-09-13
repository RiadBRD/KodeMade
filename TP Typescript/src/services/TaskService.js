import { Task } from "../models/Task.js";
export class TaskService {
    constructor() { }
    addTask(task) {
        localStorage.setItem(task.getId().toString(), JSON.stringify(task));
    }
    removeTask(task) {
        console.dir(localStorage.getItem(task.getId().toString()));
        localStorage.removeItem(task.getId().toString());
    }
    updateTask(task) {
        localStorage.setItem(task.getId().toString(), JSON.stringify(task));
    }
    getAllTasks() {
        const tasks = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                const taskJson = localStorage.getItem(key);
                if (taskJson) {
                    const obj = JSON.parse(taskJson);
                    const task = new Task(obj.title, obj.description, obj.status);
                    tasks.push(task);
                }
            }
        }
        return tasks;
    }
}
//# sourceMappingURL=TaskService.js.map