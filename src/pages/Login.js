import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <div className="login">
          <h1>Login</h1>
          <div className="login-header"></div>
          <div className="login-form">
            <form onSubmit={this.handleFormSubmit}>
              <h3>Username:</h3>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />

              <h3>Password:</h3>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <br />

              <input type="submit" value="Login" className="login-button" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
