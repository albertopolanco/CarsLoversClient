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
      const res = await service.profile(this.userId);
      
      let userCar = await axios.get(
        `${process.env.REACT_APP_API_URI}/profile/car/${this.props.user._id}`
      );
      
      this.setState({ user: res, car :userCar.data });
     
    } catch (error) {
      console.log(error);
      
    }
    
  };

  componentDidMount() {
    this.getProfile();
  }

  render() {
    
  return (
    <div className="profileBackground">
      <section>
      <div className="titleProfile">
        <h1>Welcome {this.props.user.username}
        </h1>
      </div>
      

     
           </section>
      <section>
        
    <div className="botones">

        <Link to={`/editUser/${this.props.user._id}`}>
          
          <button className="profileButton">Edit Profile</button>
        </Link>
        <Link to={`/garage/${this.props.user._id}`}>
          
          <button className="profileButton">My Garage</button>
        </Link>
        </div>
      </section>
    
    </div>
  );
}

}

export default withAuth(Profile);

