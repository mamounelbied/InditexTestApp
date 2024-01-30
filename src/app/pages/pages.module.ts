import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from '../modals/add-todo/add-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';



@NgModule({
  declarations: [HomeComponent, TodoComponent, AddTodoComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[HomeComponent, AddTodoComponent]
})
export class PagesModule { }