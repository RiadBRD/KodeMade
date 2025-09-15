import { TaskService } from "./../services/TaskService.js";
export declare class TaskUI {
    private readonly taskService;
    constructor(taskService: TaskService);
    init(): void;
    private createTaskWithForm;
    private renderTask;
    private updateTaskForm;
    private getStatusColor;
    private displayTaskList;
    private bindDeleteButton;
    private bindUpdateButton;
    private openModal;
    private bindCloseModalButton;
    private appendStatusColumn;
}
//# sourceMappingURL=TaskUI.d.ts.map