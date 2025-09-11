// Task.ts
import { Status } from '../enum/Status.js';
export class Task {
    title;
    description;
    static lastId = localStorage.length;
    id;
    status;
    constructor(title, description) {
        this.title = title;
        this.description = description;
        Task.lastId++;
        this.id = Task.lastId;
        this.status = Status.IN_PROGRESS;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
    getStatus() {
        if (this.status == 0) {
            return "PENDING";
        }
        if (this.status == 1) {
            return "IN_PROGRESS";
        }
        return "COMPLETED";
    }
    setStatus(s) {
        this.status = s;
    }
}
//# sourceMappingURL=Task.js.map