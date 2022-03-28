import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import pepsiReducer from "./pepsi/pepsiReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  pepsi: pepsiReducer,
  users: userReducer,
});

export default rootReducer;
