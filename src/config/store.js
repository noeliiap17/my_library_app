import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

const initialState = {};

const store = () => {
  const initialize = createStore(reducer, initialState, applyMiddleware(thunk));

  return initialize;
};

export default store;
