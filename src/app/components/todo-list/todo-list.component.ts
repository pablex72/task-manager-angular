import { CommonModule } from '@angular/common';
import { Input, Component } from '@angular/core';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodoListItemComponent } from "../todo-list-item/todo-list-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoList?: Todo[] | null;
}
