import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { DatePipe } from "../../pipes/date.pipe";
import { TodosService } from '../services/todos.service';
import { formOptions } from 'src/app/config/options';
import { traductions } from 'src/app/utils/traductions';
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule, DatePipe, DropdownComponent],
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
   @Input() todo?: Todo;

   private todosService = inject(TodosService)
   public statusOptions = formOptions;

   get optionSelected() {
      return {value: this.todo?.status, name: traductions[this.todo?.status!]}
    }

   public removeTodo(){
    if(!this.todo) return
    this.todosService.removeTodo(this.todo.id);
   }

   public changeStatus(newStatus: {value:TodoStatus; name: string}){
    if(this.todo?.id){
      this.todosService.changeTodoStatus(this.todo.id, newStatus.value);
    }
   }
   
 }
