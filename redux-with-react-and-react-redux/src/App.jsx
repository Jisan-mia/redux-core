import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/counter-with-connect'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <Counter id='1' />
    </Provider>
  )
}

export default App
