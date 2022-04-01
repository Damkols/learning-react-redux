import { combineReducers } from "redux";
import userReducer from "./user/userReducer2";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
