const fetch = require("node-fetch");

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data = await response.json();

  dispatch({
    type: "todo/todoLoaded",
    payload: data,
  });

  console.log(`update todos length: ${getState().todos.length}`);
};

module.exports = {
  fetchTodos,
};
