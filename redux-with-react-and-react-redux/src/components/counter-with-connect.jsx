import { connect } from 'react-redux';
import { decrementCount, incrementCount } from '../redux/counter/actions';
function Counter({
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
  console.log(ownProps)
  return {
    counter: state.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (value) => dispatch(incrementCount(value)),
    decrementCount: (value) => dispatch(decrementCount(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)