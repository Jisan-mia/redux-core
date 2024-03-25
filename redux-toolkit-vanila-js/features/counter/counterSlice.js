const {createSlice} = require('@reduxjs/toolkit')

// initial state
const initialState = {
  count: 0
}

// counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count = state.count + 1
    },
    decrementCount: (state) => {
      state.count = state.count - 1
    },
    incrementByPayload: (state, action) => {
      state.count = state.count + action.payload
    }
  }
})

module.exports = counterSlice.reducer;

module.exports.counterActions = counterSlice.actions






