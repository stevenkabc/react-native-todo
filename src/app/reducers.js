import { combineReducers} from 'redux';

const CREATE_TODO = 'CREATE_TODO';
const DELETE_TODO = 'DELETE_TODO'

const user = ( state = {}, action) => {
  return state;
};

const todos = (state = [], action) => {

  switch (action.type) {

    case CREATE_TODO:
      return [
        action.payload,
        ...state
      ]

    case DELETE_TODO:
      const i = action.payload.index;
      const tempTodos = [state.todos];
      const item = state.Todos[i].id;
      return [{
        todos: [...tempTodos.slice(0,i), ...tempTodos.slice(i+1)]
      }];

    default:
      return state;

  }
};
export const reducer = combineReducers({ todos, user});
