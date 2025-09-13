import { Status } from "./enum/Status.js";
import { Task } from "./models/Task.js";
import { TaskService } from "./services/TaskService.js";

const taskService = new TaskService();

//Element
const form = document.querySelector("form") as HTMLFormElement;
const titleInput = document.querySelector("#title") as HTMLInputElement;
const descriptionInput = document.querySelector(
  "#description"
) as HTMLInputElement;
const statusSelect = document.querySelector("#status") as HTMLSelectElement;
const taskContainer = document.querySelector(
  "#task-container"
) as HTMLDivElement;

//Functions
function loadingPage() {
  window.addEventListener("load", displayTaskList);
}

function renderTask(task: Task) {
  const taskElement = document.createElement("div");
  taskElement.id = task.getId().toString();
  let colorStatus: string = "btn-warning";
  if (task.getStatus() === Status[1]) {
    colorStatus = "btn-primary";
  }
  if (task.getStatus() === Status[2]) {
    colorStatus = "btn-success";
  }
  taskElement.innerHTML = `
<div class="col col${task.getId()}">
  <div class="card">
    <div class="card-body position-relative">
      <button class="remove-btn btn btn-danger position-absolute top-0 end-0 m-2">X</button>
      <h5 class="card-title">${task.getTitle()}</h5>
      <p class="card-text">${task.getDescription()}</p>
      <button class="btn ${colorStatus}">${task.getStatus()}</button>
      <button class="update-btn btn btn-primary position-absolute top-1 end-0 m-2">Update</button>
    </div>
  </div>
</div>
  <br>`;
  taskContainer.appendChild(taskElement);
  const currentCloseBtn = taskElement.querySelector(
    ".remove-btn"
  ) as HTMLButtonElement;

  currentCloseBtn.addEventListener("click", () => {
    taskElement.remove();
    taskService.removeTask(task);
  });

  const currentUpdateBtn = taskElement.querySelector(
    ".update-btn"
  ) as HTMLButtonElement;
  currentUpdateBtn.addEventListener("click", () => {
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

    const updateForm = document.querySelector(".update-form") as HTMLFormElement;
    updateForm.addEventListener('submit',()=>{
      const newTitleInput = updateForm.querySelector("#title") as HTMLInputElement;
      const newDescriptionInput = updateForm.querySelector("#description") as HTMLInputElement;
      const newStatusSelect = updateForm.querySelector("#status") as HTMLSelectElement;

      if(newTitleInput!=null) task.setTitle(newTitleInput.value.toString())
      if(newTitleInput!=null) task.setDescription(newDescriptionInput.value.toString())
      const status = Number(newStatusSelect.value) as Status;
      task.setStatus(status);
      
      taskService.updateTask(task);
    })
  });
}

function displayTaskList() {
  const taskList: Task[] = taskService.getAllTasks();
  taskList.forEach((t: Task) => {
    renderTask(t);
  });
}

//Form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const description = descriptionInput.value;
  const status = Number(statusSelect.value) as Status;
  const task = new Task(title, description, status);
  taskService.addTask(task);
  renderTask(task);
  form.reset();
});

//Script
loadingPage();
