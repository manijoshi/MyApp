export interface Task{
    id:string,
    userid:string,
    title:string,
    summary:string,
    duedate:string
  };
export type NewTaskData={
    title:string,
    summary:string,
    date:string
}