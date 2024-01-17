import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from '../redux/counter/actions';
export default function ReduxHooksCounter() {
  const counter = useSelector((state) => state.value)
  const dispatch = useDispatch();

  const increment = (value) => {
    dispatch(incrementCount(value))
  }
  const decrement = (value) => {
    dispatch(decrementCount(value))
  }

  return (
    <div>
      <h1>
        {counter}
      </h1>
      <div>
        <button onClick={() => increment(5)}>Increment</button>
        <button onClick={() => decrement(5)}>Decrement</button>
      </div>
    </div>
  )
}

