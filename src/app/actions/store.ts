import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { todosReducer } from "./todo.store";

export interface AppState{
  todos: Todo[]
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todosReducer
}