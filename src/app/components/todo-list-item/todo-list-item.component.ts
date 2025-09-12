import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { DatePipe } from "../../pipes/date.pipe";

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
   @Input() todo?: Todo;
 }
