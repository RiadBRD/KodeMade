import { TaskService } from "./services/TaskService.js";
import { TaskUI } from "./ui/TaskUI.js";

const taskService = new TaskService();
const taskUI = new TaskUI(taskService);



//Functions
function loadingPage() {
  window.addEventListener("load",() =>  taskUI.init());
}

loadingPage();
