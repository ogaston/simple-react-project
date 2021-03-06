import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/index";

export default compose(applyMiddleware(thunk))(createStore)(postsReducer); // store;
