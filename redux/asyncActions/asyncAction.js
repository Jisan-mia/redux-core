const {legacy_createStore: createStore, applyMiddleware} = require('redux')
const {thunk} = require('redux-thunk')

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: ''
}

// action creators
const fetchPostRequested = () => {
  return {
    type: 'posts/fetchPostRequested'
  }
}
const fetchPostSucceeded = (posts) => {
  return {
    type: 'posts/fetchPostSucceeded',
    payload: posts
  }
}

const fetchPostFailed = (err) => {
  return {
    type: 'posts/fetchPostFailed',
    payload: err
  }
}

// reducer
const postReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'posts/fetchPostRequested':
      return {
        ...state,
        loading: true,
        error: ''
      }
    case 'posts/fetchPostSucceeded':
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ''
      }
    case 'posts/fetchPostFailed':
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload.message
      }
    default:
      return state
  }
}

// thunk(function) action creator
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostRequested())
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      dispatch(fetchPostSucceeded(data))
    } catch(err) {
      dispatch(fetchPostFailed(err))
    }
  }
}

const store = createStore(postReducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(fetchPosts())