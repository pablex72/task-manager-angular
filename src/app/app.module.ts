import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
