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
    <div className="">
      <div>
        <p><b>Bienvenido {this.props.user.username}
        </b></p>
      </div>
      <section>

     
           </section>
      <section className="">
        
   

        <Link to={`/editUser/${this.props.user._id}`}>
          
          <button className="">Edit Profile</button>
        </Link>
        <Link to={`/garage/${this.props.user._id}`}>
          
          <button className="">My Garage</button>
        </Link>
       
      </section>
    
    </div>
  );
}

}

export default withAuth(Profile);

