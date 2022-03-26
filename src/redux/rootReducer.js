import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import pepsiReducer from "./pepsi/pepsiReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  pepsi: pepsiReducer,
});

export default rootReducer;
