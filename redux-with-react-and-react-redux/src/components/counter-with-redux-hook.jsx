import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from '../redux/counter/actions';
export default function ReduxHooksCounter() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCount())
  }
  const decrement = () => {
    dispatch(decrementCount())
  }

  return (
    <div>
      <h1>
        {counter}
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

