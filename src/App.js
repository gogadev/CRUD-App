import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";

import Home from "./components/home/Home";
import AddUser from "./components/add-user/AddUser";
import EditUser from "./components/edit-user/EditUser";

import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
