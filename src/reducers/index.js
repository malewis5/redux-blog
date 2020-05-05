import { combineReducers } from "redux";

const testReducer = (state = "", action) => {
  switch (action.type) {
    case "TEST":
      console.log("Fire me up");
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  testReducer,
});
