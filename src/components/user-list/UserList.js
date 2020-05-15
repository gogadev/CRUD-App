import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

import addUser from "../../assets/user.png";
import deleteUser from "../../assets/delete.png";

import "./user-list.style.css";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <div className="user-list">
      {users.length > 0 ? (
        <React.Fragment>
          {users.map((user) => (
            <div key={user.id}>
              <h1 className="user-name">{user.name}</h1>
              <div className="edit">
                <Link to={`edit/${user.id}`}>Edit</Link>
                <button className="btn" onClick={() => removeUser(user.id)}>
                  <img src={deleteUser} alt="" />
                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <div className="no-users">
          <h1 className="no-users-title">No Users</h1>
          <img className="image" src={addUser} alt="" />
          <Link to="/add">
            <button className="btn">Add User</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserList;
