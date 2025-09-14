import { Status } from "../enum/Status.js";
import { Task } from "../models/Task.js";

export class TaskService {
  addTask(task: Task): void {
    localStorage.setItem(task.getId().toString(), JSON.stringify({
      title: task.getTitle(),
      description: task.getDescription(),
      status: task.getStatusValue(),
      id: task.getId()
    }));
  }

  removeTask(task: Task): void {
    localStorage.removeItem(task.getId().toString());
  }

  updateTask(task: Task): void {
    localStorage.setItem(task.getId().toString(), JSON.stringify({
      title: task.getTitle(),
      description: task.getDescription(),
      status: task.getStatusValue(),
      id: task.getId()
    }));
  }

  getAllTasks(): Task[] {
    const tasks: Task[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const taskJson = localStorage.getItem(key);
        if (taskJson) {
          const obj = JSON.parse(taskJson);
          const task = new Task(
            obj.title,
            obj.description,
            obj.status,
            obj.id
          );
          tasks.push(task);
        }
      }
    }
    return tasks;
  }
}
