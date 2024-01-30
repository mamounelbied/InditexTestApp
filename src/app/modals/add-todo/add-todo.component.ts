import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { addTodo, selectTodos } from 'src/app/actions/todo.store';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  store = inject(Store)
  todos = this.store.selectSignal(selectTodos)
  public myForm: FormGroup | any;

  constructor(private router: Router,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initForm()
  }

initForm(){
  this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
}

  addTodo(){
    this.store.dispatch(addTodo({ name: this.myForm.value.name ?? '' , description: this.myForm.value.description ?? ''}))
    this.activeModal.close({ action: 'close' })
    return this.router.navigateByUrl(`/`)
  }
  
}
