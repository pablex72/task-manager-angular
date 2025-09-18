import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { DatePipe } from './pipes/date.pipe';
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoListComponent, TodoFormComponent, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
