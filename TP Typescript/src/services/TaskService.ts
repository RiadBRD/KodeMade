import { Task } from "../models/Task.js";

export class TaskService {
  constructor() {}

  addTask(task: Task): void {
    localStorage.setItem(task.getId().toString(), JSON.stringify(task));
  }

  removeTask(task: Task): void {
    localStorage.removeItem(task.getId().toString());
  }

  updateTask(task: Task): void {
    localStorage.setItem(task.getId().toString(), JSON.stringify(task));
  }

  getAllTasks(): Task[] {
    const tasks: Task[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const taskJson = localStorage.getItem(key);
        if (taskJson) {
          const obj = JSON.parse(taskJson);
          const task = new Task(obj.title, obj.description);
          tasks.push(task);
        }
      }
    }
    return tasks;
  }
}
