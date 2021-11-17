import { FetchTodosAction, DeleteTodoAction } from '.';

// enum is really good for action types
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  // default = 0, 1...
}

// for reducer
export type Action = FetchTodosAction | DeleteTodoAction;
