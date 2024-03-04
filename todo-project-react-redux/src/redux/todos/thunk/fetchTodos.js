import { todoLoaded } from "../actions";

const fetchTodos = () => async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();

  dispatch(todoLoaded(todos));

}

export default fetchTodos

