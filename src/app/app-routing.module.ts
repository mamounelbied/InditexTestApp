import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './modals/add-todo/add-todo.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';

export const routes: Routes = [
{
  path: '', 
  component: HomeComponent,
  children:
  [{
    path: 'add',
    component: AddTodoComponent
  }]
},
{
    path: 'list/:todoId',
    component: TodoDetailComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
