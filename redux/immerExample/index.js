const { legacy_createStore: createStore } = require("redux");
const { produce } = require("immer");
// initial state
const initialState = {
  name: "Jisan",
  address: {
    street: "190 Main street",
    city: "Dhaka",
    country: "Bangladesh",
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "update_address":
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     city: action.payload
      //   }
      // }
      return produce(state, (draftState) => {
        draftState.address.city = "Manikganj";
      });
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "update_address", payload: "Manikganj" });
