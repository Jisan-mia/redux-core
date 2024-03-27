const {configureStore} = require('@reduxjs/toolkit')
const counterSlice = require('../features/counter/counterSlice')
const dynamicCounterSlice = require('../features/dynamicCounter/dynamicCounterSlice');
const {createLogger} = require('redux-logger')

const logger = createLogger()


// configure store
const store = configureStore({
  reducer: {
    counter: counterSlice,
    dynamicCounter: dynamicCounterSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  }
});

module.exports = store;