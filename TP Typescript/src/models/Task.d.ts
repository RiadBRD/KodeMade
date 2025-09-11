import { Status } from '../enum/Status.js';
export declare class Task {
    private title;
    private description;
    private static lastId;
    private id;
    private status;
    constructor(title: string, description: string);
    getId(): number;
    getTitle(): string;
    getDescription(): string;
    setTitle(title: string): void;
    setDescription(description: string): void;
    getStatus(): string;
    setStatus(s: Status): void;
}
//# sourceMappingURL=Task.d.ts.map