import { connect } from 'react-redux';
import { decrementCount, incrementCount } from '../redux/counter/actions';
import { decrementDynamicCount, incrementDynamicCount } from '../redux/dynamic-counter/actions';
function VariableCounter({
  counter,
  incrementCount,
  decrementCount
}) {
  return (
    <div>
      <h1>
        {counter}
      </h1>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: ownProps?.dynamic ? state.dynamicCounter.value : state.counter.value
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementCount: () => ownProps?.dynamic ? dispatch(incrementDynamicCount(5)) : dispatch(incrementCount()),
    decrementCount: () => ownProps?.dynamic ? dispatch(decrementDynamicCount(2)) : dispatch(decrementCount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter)