import { Status } from '../enum/Status.js';

export class Task {
  private id: number;

  constructor(
    private title: string,
    private description: string,
    private status: Status,
    id?: number
  ) {
    this.id = id ?? Math.floor(Math.random() * 1000);
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

  getStatus(): string {
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

  setStatus(s: Status): void {
    this.status = s;
  }

  getStatusValue(): Status {
    return this.status;
  }
}
