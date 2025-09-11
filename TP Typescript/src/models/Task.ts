// Task.ts
import { Status } from '../enum/Status.js';

export class Task {
  private static lastId = localStorage.length;
  private id: number;
  private status: Status;

  constructor(private title: string, private description: string) {
    Task.lastId++;
    this.id = Task.lastId;
    this.status = Status.IN_PROGRESS;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getStatus():string{
    if(this.status==0){return "PENDING"}
    if(this.status==1){return "IN_PROGRESS"}
    return "COMPLETED";
  }

  setStatus(s:Status){
    this.status = s;
  }
}
