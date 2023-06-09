import { INCREMENT, DECREMENT, ADDVALUE, ASYNCADDVALUE } from "../actions";

const initialState = 0;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case ADDVALUE:
      return state + action.payload;

    case ASYNCADDVALUE:
      return state + action.payload;

    default:
      return state;
  }
};

export default counter;
