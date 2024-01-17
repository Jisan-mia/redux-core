import { useDispatch, useSelector } from "react-redux";
import { decrementDynamicCount, incrementDynamicCount } from "../redux/dynamic-counter/actions";

export default function DynamicCounter() {
  const counter = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const increment = (value) => {
    dispatch(incrementDynamicCount(value));
  };
  const decrement = (value) => {
    dispatch(decrementDynamicCount(value));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => increment(5)}>Increment</button>
        <button onClick={() => decrement(2)}>Decrement</button>
      </div>
    </div>
  );
}
