import { reducerCreator } from "template-redux-helpers";
import {
  LOADING_TODO,
  GET_TODOS,
  ERROR_TODO,
} from "../../action/todo/todo-action-type";

const inititalState = {
  isLoading: false,
  todos: [],
  status_code: null,
  error: null,
};

const todoReducer = {
  [LOADING_TODO]: (state, action) => {
    return {
      ...state,
      isLoading: action.payload,
    };
  },
  [GET_TODOS]: (state, action) => {
    return {
      ...state,
      status_code: action.payload.status,
      todos: action.payload.data,
    };
  },
  [ERROR_TODO]: (state, action) => {
    return {
      ...state,
      error: action.payload.message,
    };
  },
};

export default reducerCreator(inititalState, todoReducer);
