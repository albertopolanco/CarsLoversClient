import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import EditUser from "./pages/EditUser";
import CreateCar from "./pages/CreateCar";
import EditCar from "./pages/EditCar";
import Garage from "./pages/Garage";
import CarDetail from "./pages/CarDetail";
import CarDetailsUsers from "./pages/CarDetailsUsers";

import ViewAllCars from "./pages/ViewAllCars"


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/editUser/:id" component={EditUser} />
            <PrivateRoute exact path="/editcar/:id" component={EditCar} />
            <PrivateRoute exact path="/createcar/:id" component={CreateCar} />
            <PrivateRoute exact path="/garage/:id" component={Garage} />
            <PrivateRoute exact path="/cardetail/:id" component={CarDetail} />
            <PrivateRoute exact path="/cardetailsusers/:id" component={CarDetailsUsers} />
            <Route exact path="/private" component={Private} />
            <Route exact path="/cars/allcars" component={ViewAllCars} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
