import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/usersAction";

const User = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
