import React, { Component } from "react";
import { withAuth } from '../lib/AuthProvider';
import { Link } from "react-router-dom";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password })
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          
          <h3>Username:</h3>
          <input 
          type="text" 
          name="username" 
          value={username} 
          onChange={this.handleChange}
          />

          <h3>Password:</h3>
          <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={this.handleChange} 
          />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
