import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interfaces/todos.interfaces';
// import { Todo } from '..'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [];

  public addTodo(newTodo: Todo){
    this.todos.push(newTodo)
  }

  public removeTodo(todoId: Todo["id"]) {
    this.todos = this.todos.filter(todo => todo.id !== todoId)
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

}
