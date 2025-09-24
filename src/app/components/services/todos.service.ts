import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
// import { Todo } from '..'


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [];

  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {
    this.loadDromLocalStorage()
  }

  public addTodo(newTodo: Todo){
    this.todos.push(newTodo)
    this.update()
  }

  public removeTodo(todoId: Todo["id"]) {
    this.todos = this.todos.filter(todo => todo.id !== todoId)
    this.update()
  }

  public changeTodoStatus(todoId: Todo['id'], newStatus: TodoStatus) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId );
    if(todoIndex !== -1){
      this.todos[todoIndex].status = newStatus;
      this.update();
    }
    this.update();
  }

  public getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  private loadDromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos){
      this.todos = JSON.parse(storedTodos);
    }
  }

  private update(){
    this.todosSubject.next(this.todos);
    this.updateLocalStorage()
  }

  private updateLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

}
