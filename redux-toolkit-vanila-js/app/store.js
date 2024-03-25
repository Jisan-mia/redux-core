const {configureStore} = require('@reduxjs/toolkit')
const counterSlice = require('../features/counter/counterSlice')

// configure store
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

module.exports = store;