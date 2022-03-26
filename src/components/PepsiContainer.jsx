import React from "react";
import { connect } from "react-redux";
import { buyPepsi } from "../redux/pepsi/pepsiActions";

const PepsiContainer = ({ numOfPepsi, buyPepsi }) => {
  return (
    <div>
      <h1>Num of Pepsi - {numOfPepsi}</h1>
      <button onClick={buyPepsi}>Buy Pepsi</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfPepsi: state.pepsi.numOfPepsi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPepsi: () => dispatch(buyPepsi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PepsiContainer);
