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
    let { 
      username, 
      age, 
      country, 
      city, 
      image 
    } = this.state;

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
         this.props.history.push(`/profile`);
         
      })
      .catch((error) => console.log(error));
  };

 
handleFormEdit = (event) => {

    axios
      .get(`${process.env.REACT_APP_API_URI}/profile/${this.props.user._id}`)
      .then((edit) => {
        this.setState({
          username: edit.data.username,
          age: edit.data.age,
          country: edit.data.country,
          city: edit.data.city,
          image: edit.data.image,
        })
       console.log(edit, "222222222222")
       
    })
    .catch((error) => console.log(error));

}
  



  handleChangeUser = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = async (e) => {
    const upload = new FormData();
    upload.append("image", e.target.files[0]);
    try {
      const res = await service.handleUpLoad(upload);
      this.setState({ image: res.secure_url });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.handleFormEdit();
  }

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

        <Link to={`/profile`}>
            <button className="login-button">Go back</button>
          </Link>
      </form>
    </div>
  );
}

}

export default withAuth(EditUser);
