import { changeTodoColor } from "../actions";

const changeTodoColorThunk = (todo) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: todo.color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const todoData = await response.json();

    dispatch(changeTodoColor(todoData));
  };
};

export default changeTodoColorThunk;
