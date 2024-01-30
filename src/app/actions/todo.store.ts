import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "../models/todo.model";

const initialState: Todo[] = [
  {
    id: uuidv4(),
    name: 'Inditex Test',
    description: 'Testing'
  }
]

export const addTodo = createAction('addTodo', props<{ name: string, description: string }>())
export const deleteTodo = createAction('removeTodo', props<{ id: string }>())

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, { name, description}) => ([...state, { name , description, id: uuidv4()}])),
  on(deleteTodo, (state, { id }) => (state.filter((todo) => todo.id !== id))),
)

const selectTodosFeature = createFeatureSelector<Todo[]>('todos')

export const selectTodos = createSelector(
  selectTodosFeature,
  (state: Todo[]) => state
)