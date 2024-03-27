const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice');
const {dynamicCounterActions} = require('./features/dynamicCounter/dynamicCounterSlice')
store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(counterActions.incrementCount())
// store.dispatch(counterActions.incrementCount());
// store.dispatch(counterActions.incrementByPayload(2))
// store.dispatch(counterActions.decrementCount());

store.dispatch(dynamicCounterActions.increment(3));
store.dispatch(dynamicCounterActions.increment(2));
store.dispatch(dynamicCounterActions.decrement(3));
