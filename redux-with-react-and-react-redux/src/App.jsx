import { Provider } from 'react-redux'
import './App.css'
import ReduxHooksCounter from './components/counter-with-redux-hook'
import DynamicCounter from './components/dynamic-counter'
import VariableCounter from './components/variable-counter'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      {/* <Counter id='1' /> */}
      <ReduxHooksCounter />
      <hr />
      <DynamicCounter />
      <hr />

      <VariableCounter />
      <hr />

      <VariableCounter dynamic />

    </Provider>
  )
}

export default App
