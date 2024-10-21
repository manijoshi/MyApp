import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
import { JsonpInterceptor } from "@angular/common/http";

@Injectable({providedIn:'root'})
export class TaskService{
    constructor() {
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
        
    }
    private tasks=[
        {
          id:'t1',
          userid:'u1',
          title:'Master Angular',
          summary:'Learn all the basic and advanced features of Angular & how to apply them.',
          duedate:'2025-12-31'
        },
        {
          id:'t2',
          userid:'u2',
          title:'Build your first prototype',
          summary:'Build a first prototype of the online shop website',
          duedate:'2025-05-31'
        },
        {
          id:'t3',
          userid:'u3',
          title:'Prepare issue template',
          summary:'Prepare and describe an issue template which will help with project management',
          duedate:'2025-06-15'
        },
        {
          id:'t4',
          userid:'u3',
          title:'Prepare issue template-II',
          summary:'Prepare and describe an issue template which will help with project management-PART 2',
          duedate:'2025-07-15'
        }
      ];
    getUserTasks(userId:string){
        return this.tasks.filter((task)=>task.userid===userId);
    }
    addTask(taskData:NewTaskData,userId:string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userid: userId,
            title:taskData.title,
            summary:taskData.summary,
            duedate:taskData.date
          })
          this.saveTasks();
    }
    removeTask(taskId:string){
        this.tasks = this.tasks.filter((task)=>task.id!==taskId);
        this.saveTasks();
    }
    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
}