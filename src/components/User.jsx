import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/usersAction";
import { useEffect } from "react";

const User = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(userData);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User list</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);

// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchUsers } from "../redux/users/usersAction";

// const User = ({ userData, fetchUsers }) => {
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return userData.loading ? (
//     <h2>Loading</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <h2>User list</h2>
//       <div>
//         {userData &&
//           userData.users &&
//           userData.users.map((user) => <p>{user.name}</p>)}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     userData: state.users,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(User);
