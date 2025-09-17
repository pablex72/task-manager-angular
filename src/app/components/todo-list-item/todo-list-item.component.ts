import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { DatePipe } from "../../pipes/date.pipe";
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
   @Input() todo?: Todo;

   private todosService = inject(TodosService)

   public removeTodo(){
    if(!this.todo) return
    this.todosService.removeTodo(this.todo.id);
   }
   
 }
