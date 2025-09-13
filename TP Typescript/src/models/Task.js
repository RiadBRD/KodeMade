// Task.ts
import { Status } from '../enum/Status.js';
export class Task {
    title;
    description;
    status;
    id;
    constructor(title, description, status, id) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = id;
        if (!this.id)
            this.id = Math.floor(Math.random() * 1000);
    }
    getId() {
        if (this.id) {
            return this.id;
        }
        return 0;
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