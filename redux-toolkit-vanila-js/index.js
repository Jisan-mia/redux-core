const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice');

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(counterActions.incrementCount())
store.dispatch(counterActions.incrementCount());
store.dispatch(counterActions.incrementByPayload(2))
store.dispatch(counterActions.decrementCount());
