import { Task } from "./models/Task.js";
import { TaskService } from "./services/TaskService.js";
const taskService = new TaskService();
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const taskContainer = document.querySelector("#task-container");
if (taskContainer.children.length == 0) {
    displayTaskList();
}
function renderTask(task) {
    const taskElement = document.createElement("div");
    taskElement.id = task.getId().toString();
    let colorStatus = "btn-warning";
    if (task.getStatus() === "ON_PROGRESS") {
        colorStatus = "btn-primary";
    }
    if (task.getStatus() === "COMPLETED") {
        colorStatus = "btn-success";
    }
    taskElement.innerHTML = `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${task.getTitle()}</h5>
        <p class="card-text">${task.getDescription()}</p>
        <button class="btn ${colorStatus}">${task.getStatus()}</button>
      </div>
    </div>
  </div>
  <br>`;
    taskContainer.appendChild(taskElement);
}
function displayTaskList() {
    const taskList = taskService.getAllTasks();
    taskList.forEach((t) => {
        renderTask(t);
    });
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = new Task(titleInput.value, descriptionInput.value);
    taskService.addTask(task);
    renderTask(task);
    form.reset();
});
//# sourceMappingURL=app.js.map