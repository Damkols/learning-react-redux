import { BUY_PEPSI } from "./pepsiTypes";

const initialState = {
  numOfPepsi: 20,
};

const pepsiReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PEPSI:
      return {
        ...state,
        numOfPepsi: state.numOfPepsi - 1,
      };

    default:
      return state;
  }
};

export default pepsiReducer;
