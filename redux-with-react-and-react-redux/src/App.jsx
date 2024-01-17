import { Provider } from 'react-redux'
import './App.css'
import ReduxHooksCounter from './components/counter-with-redux-hook'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      {/* <Counter id='1' /> */}
      <ReduxHooksCounter />
    </Provider>
  )
}

export default App
