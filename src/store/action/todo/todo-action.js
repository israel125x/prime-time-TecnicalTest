import TodoService from "../../../services/TodoService";
import { actionCreator } from "template-redux-helpers";
import { LOADING_TODO, GET_TODOS, ERROR_TODO } from "./todo-action-type";

const todoService = new TodoService();

export const getTodos = () => {
  return (dispatch) => {
    dispatch(actionCreator(LOADING_TODO, "payload")(true));
    todoService
      .list()
      .then((data) => {
        dispatch(actionCreator(GET_TODOS, "payload")(data));
        dispatch(actionCreator(LOADING_TODO, "payload")(false));
      })
      .catch((error) => {
        dispatch(actionCreator(ERROR_TODO, "payload")(error));
        dispatch(actionCreator(LOADING_TODO, "payload")(false));
      });
  };
};
