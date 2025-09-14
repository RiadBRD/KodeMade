import { Status } from '../enum/Status.js';
export declare class Task {
    private title;
    private description;
    private status;
    private id;
    constructor(title: string, description: string, status: Status, id?: number);
    getId(): number;
    getTitle(): string;
    getDescription(): string;
    setTitle(title: string): void;
    setDescription(description: string): void;
    getStatus(): string;
    setStatus(s: Status): void;
    getStatusValue(): Status;
}
//# sourceMappingURL=Task.d.ts.map