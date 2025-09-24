import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterStatus, Orders, Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
// import { Todo } from '..'


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [];

  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);
  public filterSubject = new BehaviorSubject<FilterStatus>('all')

  constructor() {
    this.loadDromLocalStorage()
    this.setupFiltering()
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

  private setupFiltering() {
    this.filterSubject.subscribe((status) => {
      const filteredTodos = 
        status === 'all'
         ? this.todos
         : this.todos.filter((todo) => todo.status === status);
      this.todosSubject.next(filteredTodos);
    })
  }

  public orderByDate(order: Orders ) {
    this.todos.sort((a, b) => {
      const dateA = new Date (a.createdAt).getTime();
      const dateB = new Date (b.createdAt).getTime();
      return order === 'newest' ? dateB - dateA : dateA - dateB;
    });
    this.update();
  }

  public filterByStatus(status: FilterStatus){
    this.filterSubject.next(status)
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
