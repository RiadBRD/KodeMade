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
        this.id = id ?? Math.floor(Math.random() * 1000);
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
        switch (this.status) {
            case Status.PENDING:
                return "PENDING";
            case Status.IN_PROGRESS:
                return "IN_PROGRESS";
            case Status.COMPLETED:
                return "COMPLETED";
            default:
                return "UNKNOWN";
        }
    }
    setStatus(s) {
        this.status = s;
    }
    getStatusValue() {
        return this.status;
    }
}
//# sourceMappingURL=Task.js.map