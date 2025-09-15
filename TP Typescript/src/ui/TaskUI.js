import { Task } from "./../models/Task.js";
import { TaskService } from "./../services/TaskService.js";
import { Status } from "../enum/Status.js";
export class TaskUI {
    taskService;
    constructor(taskService) {
        this.taskService = taskService;
    }
    init() {
        this.displayTaskList(this.taskService.getAllTasks());
        const form = document.querySelector(".creation-form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const createdTask = this.createTaskWithForm();
            this.taskService.addTask(createdTask);
            this.renderTask(createdTask);
            form.reset();
        });
        const searchForm = document.querySelector(".search-form");
        const searchTitleInput = searchForm.querySelector("input");
        const searchStatusSelect = searchForm.querySelector("select");
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const searchTitle = searchTitleInput.value.toString();
            const searchStatus = searchStatusSelect.value.toString();
            const currentContainer = document.querySelector("#task-container");
            currentContainer.innerHTML = "";
            this.displayTaskList(this.taskService.search(searchTitle, searchStatus));
        });
    }
    createTaskWithForm() {
        const form = document.querySelector(".creation-form");
        const titleInput = form.querySelector("#creation-title");
        const descriptionInput = form.querySelector("#creation-description");
        const statusSelect = form.querySelector("#creation-status");
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const status = Number(statusSelect.value);
        const task = new Task(title, description, status);
        return task;
    }
    renderTask(task) {
        const taskContainer = document.querySelector("#task-container");
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
        const currentDeleteButton = taskElement.querySelector(".delete-btn");
        currentDeleteButton.addEventListener("click", () => {
            taskElement.remove();
            this.taskService.removeTask(task);
        });
        const currentUpdateButton = taskElement.querySelector(".update-btn");
        currentUpdateButton.addEventListener("click", () => {
            const closeBtn = document.getElementById("closeModalBtn");
            const modal = document.getElementById("modal");
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
    updateTaskForm(task) {
        const updateForm = document.querySelector(".update-form");
        updateForm.addEventListener("submit", () => {
            const newTitleInput = updateForm.querySelector("#update-title");
            const newDescriptionInput = updateForm.querySelector("#update-description");
            const newStatusSelect = updateForm.querySelector("#update-status");
            if (newTitleInput != null)
                task.setTitle(newTitleInput.value.toString());
            if (newTitleInput != null)
                task.setDescription(newDescriptionInput.value.toString());
            const status = Number(newStatusSelect.value);
            task.setStatus(status);
            this.taskService.updateTask(task);
        });
    }
    getStatusColor(status) {
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
    displayTaskList(taskList) {
        taskList.forEach((t) => {
            this.renderTask(t);
        });
    }
}
//# sourceMappingURL=TaskUI.js.map