import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todos.interfaces';
// import { Todo } from '..'

const tareasDePrueba: Todo[] = [
    {
      id: 1,
      description: 'Tarea 1',
      createdAt: new Date(),
      status: 'empty'
    },
    {
      id: 2,
      description: 'Tarea 2',
      createdAt: new Date(),
      status: 'empty'
    },
    {
      id: 3,
      description: 'Tarea 1',
      createdAt: new Date(),
      status: 'empty'
    }
  ];

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = tareasDePrueba;

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
