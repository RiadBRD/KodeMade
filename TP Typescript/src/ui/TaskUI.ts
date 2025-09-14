import { Task } from "./../models/Task.js";
import { TaskService } from "./../services/TaskService.js";
import { Status } from "../enum/Status.js";

export class TaskUI {
  constructor(private readonly taskService: TaskService) {}

  init() {
    this.displayTaskList();
    const form = document.querySelector("form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const createdTask = this.createTaskWithForm();
      this.taskService.addTask(createdTask);
      this.renderTask(createdTask);
      form.reset();
    });
  }

  private createTaskWithForm(): Task {
    const form = document.querySelector("form") as HTMLFormElement;
    const titleInput = form.querySelector("#title") as HTMLInputElement;
    const descriptionInput = form.querySelector(
      "#description"
    ) as HTMLInputElement;
    const statusSelect = form.querySelector("#status") as HTMLSelectElement;

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const status = Number(statusSelect.value) as Status;

    const task = new Task(title, description, status);

    return task;
  }

  private renderTask(task: Task): void {
    const taskContainer = document.querySelector(
      "#task-container"
    ) as HTMLDivElement;

    const taskElement = document.createElement("div");
    taskElement.classList.add("col-md-4", "mb-3");

    taskElement.innerHTML = `
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <h5 class="card-title text-primary">${task.getTitle()}</h5>
        <p class="card-text">${task.getDescription()}</p>
        <span class="badge bg-${this.getStatusColor(task.getStatus())}">
          ${task.getStatus()}
        </span>
      </div>
      <div class="card-footer text-end">
        <button class=" update-btn btn btn-sm btn-outline-success me-2">Modfier</button>
        <button class=" delete-btn btn btn-sm btn-outline-danger">Supprimer</button>
      </div>
    </div>
  `;

    taskContainer.appendChild(taskElement);

    const currentDeleteButton = taskElement.querySelector(
      ".delete-btn"
    ) as HTMLButtonElement;
    currentDeleteButton.addEventListener("click", () => {
      taskElement.remove();
      this.taskService.removeTask(task);
    });

    const currentUpdateButton = taskElement.querySelector(
      ".update-btn"
    ) as HTMLButtonElement;
    currentUpdateButton.addEventListener("click", () => {
      const closeBtn = document.getElementById("closeModalBtn")!;
      const modal = document.getElementById("modal")!;
      modal.style.display = "flex";
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });

      this.updateTaskForm(task);
    });
  }

  private updateTaskForm(task: Task) {
    const updateForm = document.querySelector(
      ".update-form"
    ) as HTMLFormElement;
    updateForm.addEventListener("submit", () => {
      const newTitleInput = updateForm.querySelector(
        "#title"
      ) as HTMLInputElement;
      const newDescriptionInput = updateForm.querySelector(
        "#description"
      ) as HTMLInputElement;
      const newStatusSelect = updateForm.querySelector(
        "#status"
      ) as HTMLSelectElement;

      if (newTitleInput != null) task.setTitle(newTitleInput.value.toString());
      if (newTitleInput != null)
        task.setDescription(newDescriptionInput.value.toString());
      const status = Number(newStatusSelect.value) as Status;
      task.setStatus(status);

      this.taskService.updateTask(task);
    });
  }

  private getStatusColor(status: string): string {
    switch (status) {
      case "IN_PROGRESS":
        return "secondary";
      case "PENDING":
        return "warning";
      case "COMPLETED":
        return "success";
      default:
        return "dark";
    }
  }

  private displayTaskList() {
    const taskList: Task[] = this.taskService.getAllTasks();
    taskList.forEach((t: Task) => {
      this.renderTask(t);
    });
  }
}
