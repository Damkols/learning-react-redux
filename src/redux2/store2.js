import { applyMiddleware } from "redux";
import rootReducer from "./rootReducer2";
import userReducer from "../redux2/user/userReducer2";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store2 = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store2;
