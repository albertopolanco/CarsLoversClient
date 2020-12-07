import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      age: this.props.user.age,
      country: this.props.user.country,
      city: this.props.user.city,
      image: this.props.user.image,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let { username, age, country, city, image } = this.state;

    axios
      .put(
        `${process.env.REACT_APP_API_URI}/profile/${this.props.match.params.id}/editUser`,
        {
          username,
          age,
          country,
          city,
          image,
        }
      )
      .then(() => {
        this.props.history.push(`/profile/${this.props.match.params.id}`);
      })
      .catch((error) => console.log(error));
  };

  handleChangeUser = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
  return (
    <div className="edit">
      <hr />
      <h1>Edit User</h1>
      <form className="edit-info" onSubmit={this.handleFormSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={(e) => this.handleChangeUser(e)}
        />
        <br />
        <label>Age: </label>
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={(e) => this.handleChangeUser(e)}
        />
        <br />
        <label>Country: </label>
        <input
          type="text"
          name="country"
          value={this.state.country}
          onChange={(e) => this.handleChangeUser(e)}
        />
        <br />
        <label>City: </label>
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={(e) => this.handleChangeUser(e)}
        />
        <br />
        <label>Image: </label>
        <input
          type="file"
          name="image"
          onChange={(e) => this.handleFileUpload(e)}
        />
        <br />
        <div className="submit">
          <input className="login-button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

}

export default withAuth(EditUser);
