import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// typecheckit statelle
// really really very nice documentation as well
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
