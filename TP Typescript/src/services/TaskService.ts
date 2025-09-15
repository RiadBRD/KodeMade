import { Status } from "../enum/Status.js";
import { Task } from "../models/Task.js";

export class TaskService {
  addTask(task: Task): void {
    localStorage.setItem(
      task.getId().toString(),
      JSON.stringify({
        title: task.getTitle(),
        description: task.getDescription(),
        status: task.getStatusValue(),
        id: task.getId(),
      })
    );
  }

  removeTask(task: Task): void {
    localStorage.removeItem(task.getId().toString());
  }

  updateTask(task: Task): boolean {
    try {
      localStorage.setItem(
        task.getId().toString(),
        JSON.stringify({
          title: task.getTitle(),
          description: task.getDescription(),
          status: task.getStatusValue(),
          id: task.getId(),
        })
      );
      return true;
    } catch (error) {
      console.log(error);
    }
    return false;
  }

  getAllTasks(): Task[] {
    const tasks: Task[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const taskJson = localStorage.getItem(key);
        if (taskJson) {
          const obj = JSON.parse(taskJson);
          const task = new Task(obj.title, obj.description, obj.status, obj.id);
          tasks.push(task);
        }
      }
    }
    return tasks;
  }

  search(title?: string, status?: string): Task[] {
    console.log(title);
    console.log(status);
    let taskList = this.getAllTasks();
    if (title) {
      taskList = taskList.filter((task: Task) => task.getTitle() === title);
    }

    if (status) {
      taskList = taskList.filter(
        (task: Task) => task.getStatus() === Status[parseInt(status)]
      );
    }
    console.log(taskList)
    return taskList;
  }
}
