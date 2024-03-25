Problems using only Redux

- Redux requires too much boilerplate code
  - action types
  - action creators
  - switch statement in reducer
  - too much modular file structure
- Other packages need to install
  - redux-thunk
  - redux-devtools
- Biggest concern
  - Immutable state updates
  - though there is a solution using immer package(immutable state updates in a mutable way)

To solve all the above problems redux team introduces **Redux toolkit**, the official, opinionated, batteries included toolset for official redux development
