// selectors
const counterEl = document.getElementById('counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')


// initial state
const initialState = {
  value: 0
}

// action type constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creators
const incrementCount = (value = 1) => ({
  type: INCREMENT,
  payload: value
})
const decrementCount = (value = 1)  => ({
  type: DECREMENT,
  payload: value
})

// reducer
const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload
      }
    default:
      return state
  }
}

// store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value
}

render();

store.subscribe(render)

incrementEl.addEventListener('click', () => {
  store.dispatch(incrementCount(5))
})

decrementEl.addEventListener('click', () => {
  store.dispatch(decrementCount())
})

