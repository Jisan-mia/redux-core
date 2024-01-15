const actions = [
  {type: 'increment', payload: 1},
  {type: 'increment', payload: 1},
  {type: 'increment', payload: 1},
  {type: 'decrement', payload: 1},
]

const counterReducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        value: state.value + 1
      }
    case 'decrement':
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state;
  }
}

const initialState = {
  value: 0
}

const result = actions.reduce(counterReducer, initialState)
console.log(result)
