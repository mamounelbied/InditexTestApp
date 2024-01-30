import { Component, inject } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { addTodo, deleteTodo, selectTodos } from 'src/app/actions/todo.store';
import { AddTodoComponent } from 'src/app/modals/add-todo/add-todo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  store = inject(Store)
  todos = this.store.selectSignal(selectTodos)
  formCtrl = new FormControl(null, [Validators.required, Validators.minLength(5)])

  constructor(private router: Router, 
    protected modalService: NgbModal){}

  goToAdd() {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      centered: true,
      size: 'lg'
    };

    const modalWindowRef = this.modalService.open(
      AddTodoComponent,
      modalOptions
    );
    return this.router.navigateByUrl(`/add`)
  }


}
