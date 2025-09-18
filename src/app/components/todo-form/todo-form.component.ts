import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { formOptions } from 'src/app/config/options';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  private todosService = inject(TodosService);

  public newTodoDescription: string = ''
  public newTodoStatus: {value: TodoStatus, name: string} = formOptions[0];
  public statusOptions = formOptions

  public addTodo(){
    const newTodo: Todo = {  
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.newTodoStatus.value,
      createdAt: new Date()
    };

    this.todosService.addTodo(newTodo)
    this.newTodoDescription = ''
    this.newTodoStatus = formOptions[0]

  }
 }
