import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, filter, map, switchMap } from 'rxjs';
import { selectTodos } from 'src/app/actions/todo.store';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {

  store = inject(Store)
  todoDetail!: any;
  private sub!: Subscription; 
  id!:string;

public todos$: Observable<Todo[]> = this.store.select(selectTodos);


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  )
  {

  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['todoId'];
      this.todos$.subscribe((todo: Todo[]) => {
        this.todoDetail = todo.find(x => x.id === this.id);
      })
  });
  }
  
  goBack() {
    return this.router.navigateByUrl(`/`)
  }
}
