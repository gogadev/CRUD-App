import React from "react";

import Navbar from "../navbar/Navbar";
import UserList from "../user-list/UserList";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <UserList />
    </React.Fragment>
  );
};

export default Home;
