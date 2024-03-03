const fetch = require('node-fetch')

const delayActionMiddleware = (store) => (next) => (action) => {
  if(action.type === 'todo/todoAdded') {
    console.log("i'm delaying you")
    setTimeout(() => {
      next(action)
    }, 2000)
    return;
  }

  return next(action)
}

const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if(action.type === 'todo/fetchTodo') {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await response.json();

    store.dispatch({
      type: 'todo/todoLoaded',
      payload: data
    })

    console.log(`update todos length: ${store.getState().todos.length}`)
    return;

  }

  return next(action)
}



module.exports = {
  delayActionMiddleware,
  fetchTodosMiddleware,
};