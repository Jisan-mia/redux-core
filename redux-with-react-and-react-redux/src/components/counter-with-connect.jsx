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
    counter: state.counter.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)