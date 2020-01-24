import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const initialState = {};

const store = () => {
  const initialize = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );

  return initialize;
};

export default store;
