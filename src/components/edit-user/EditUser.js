import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link, useHistory } from "react-router-dom";

import penImg from "../../assets/pen.png";

import "./edit-user.style.css";

const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  const history = useHistory();
  const currUserId = props.match.params.id;

  useEffect(() => {
    const userId = currUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currUserId, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };

  const handleChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="title">Edit USER</h1>
      <img className="pen-img" src={penImg} alt="" />
      <form className="form edit-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          value={selectedUser.name}
          onChange={handleChange}
          placeholder="Enter User"
          required
        />
        <button className="btn">Edit Name</button>
        <Link to="/">
          <button className="btn edit">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default EditUser;
