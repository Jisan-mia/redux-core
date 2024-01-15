### Key principles of Redux

- State is **immutable** object
- We **can't mutate** state, we'll always return a new, modified state
- All state changes are initiated through **actions**
- Reducers take current state, action as argument and returns new state
  - `((state, action) => newState)`
- Redux is inspired by Elm architecture that encourages functional programming principles like **Pure functions**
- That means pure functions output is always same for the same input
- Every single state change in reducers has to be taken care of by developers **explicitly**
- Reducers are supposed to be **pure** and that's where predictability comes from

- Whey redux is predictable?
  - Because using redux you'll know what every action in application will do and how state will change
