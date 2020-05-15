import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";

import { useHistory } from "react-router-dom";

import arrow from "../../assets/arrow.jpg";

import "./add-user.style.css";

const AddUser = () => {
  const { addUser } = useContext(GlobalContext);

  const [name, setName] = useState("")

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Add USER</h1>
      <img className="arrow" src={arrow} alt="" />
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter User"
          required
        />
      </form>
    </div>
  );
};

export default AddUser;
