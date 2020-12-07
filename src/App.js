import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Profile from "./pages/Profile";
import EditUser from "./pages/EditUser"

import AuthProvider from "./lib/AuthProvider";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />

          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path='/editUser/:id' component={EditUser} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
