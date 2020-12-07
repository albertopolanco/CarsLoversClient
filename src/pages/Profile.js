import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import service from "../lib/auth-service";

class Profile extends Component {
  state = {
    userId: this.props.user._id,
    user: {},
  };

  getProfile = async () => {
    try {
      const res = await service.profile(this.props.match.params.id);
    //   let ofertaGet = await axios.get(
    //     `${process.env.REACT_APP_API_URI}/profile/user/${this.props.match.params.id}`
    //   );
      let carData = await axios.get(
        `${process.env.REACT_APP_API_URI}/profile/car/${this.props.match.params.id}`
      );
      this.setState({ user: res, car :carData.data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getProfile();
  }

  render() {
  return (
    <div className="profile-container">
      <div>
        <p><b>Bienvenido {this.props.user.username}
        </b></p>
      </div>
      
      <section className="profile-links">
        
   

        <Link to={`/editUser/${this.props.user._id}`}>
          
          <button className="profile-button">Edit Profile</button>
        </Link>
      </section>
    
    </div>
  );
}

}

export default withAuth(Profile);

