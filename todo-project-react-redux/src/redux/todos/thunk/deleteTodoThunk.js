import { deleteTodo } from "../actions";

const deleteTodoThunk = (todoId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });

    const data = await response.json();

    dispatch(deleteTodo(data.id));
  };
};

export default deleteTodoThunk;
