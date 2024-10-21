import { Component, EventEmitter, inject,Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle="";
  enteredSummary="";
  enteredDate="";
  private taskService = inject(TaskService);
  
  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.taskService.addTask({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    },this.userId);
    this.close.emit();
  }
}
