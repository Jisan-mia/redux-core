const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')
const initialState = {
  loading: false,
  posts: [],
  error: ''
}

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
   const response = await fetch(
     "https://jsonplaceholder.typicode.com/posts?_limit=5"
   );
   const data = await response.json();
   return data;
})


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = ''
    })

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
      state.posts = []
    })
  }
})

module.exports = postsSlice.reducer
module.exports.fetchPosts = fetchPosts