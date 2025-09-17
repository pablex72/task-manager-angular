import { Component, inject } from '@angular/core';
import { Todo } from './interfaces/todos.interfaces';
import { TodosService } from './components/services/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public title = 'todo list';

  // public todos: Todo[] = [
  //   {
  //     id: 1,
  //     description: 'Tarea 1',
  //     createdAt: new Date(),
  //     status: 'empty'
  //   },
  //   {
  //     id: 2,
  //     description: 'Tarea 2',
  //     createdAt: new Date(),
  //     status: 'empty'
  //   },
  //   {
  //     id: 3,
  //     description: 'Tarea 3',
  //     createdAt: new Date(),
  //     status: 'empty'
  //   }
  // ]
  private todosService = inject(TodosService)

  // get todos(){
  //   return this.todosService.getTodos()
  // }

  public todos?: Todo[]

  private todosSubscription: Subscription

  constructor(){
    this.todosSubscription = this.todosService.getTodos().subscribe(todos => {

      this.todos = todos;
    })
  }

  ngDestroy() {
    this.todosSubscription.unsubscribe()
  }
}
