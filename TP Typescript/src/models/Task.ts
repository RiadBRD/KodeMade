// Task.ts
import { Status } from '../enum/Status.js';

export class Task {

  constructor(private title: string, private description: string,private status:Status,private id?:number) {
    if(!this.id)this.id =  Math.floor(Math.random() * 1000);
  }

  getId(): number {
    if(this.id)
    {return this.id;}
    return 0;
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
