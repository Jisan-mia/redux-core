import { toggleTodo } from "../actions";

const toggleCompleted = (todo) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        is_completed: !todo.is_completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const todoData = await response.json();

    dispatch(toggleTodo(todoData.id));
  };
};

export default toggleCompleted;
