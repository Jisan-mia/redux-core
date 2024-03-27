const {configureStore} = require('@reduxjs/toolkit')
const counterSlice = require('../features/counter/counterSlice')
const dynamicCounterSlice = require('../features/dynamicCounter/dynamicCounterSlice');
// configure store
const store = configureStore({
  reducer: {
    counter: counterSlice,
    dynamicCounter: dynamicCounterSlice
  },
});

module.exports = store;