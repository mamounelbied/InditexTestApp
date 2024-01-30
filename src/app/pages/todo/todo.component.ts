import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteTodo } from 'src/app/actions/todo.store';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  store = inject(Store)
  @Input() todo!: Todo;
  

  constructor(
    private router: Router,
  ){}

  deleteTodo():void{
    this.store.dispatch(deleteTodo({ id: this.todo.id}))
  }

  goToDetail(todo:Todo){
    return this.router.navigateByUrl(`/list/${this.todo.id}`)
  }
  
}
