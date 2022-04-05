import { applyMiddleware, createStore } from "redux";
import moviesReducer from "./reducer/movieReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  moviesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
