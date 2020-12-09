import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import service from "../lib/auth-service";

class Garage extends Component {
    state = {
        userId: this.props.user._id,
        cars: [],
    };

  getGarage = async () => {
    try {
    let myCars = await service.garage(this.props.match.params.id)
        console.log(myCars, "rrrrrrrrrrrrr")
        this.setState({  cars: myCars });
     } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getGarage();
  }
  

  render() {
    
    return (
        
      <div>
          
        <h1>My Garage</h1>
        <section>
          <div className="cards-profileLaptop">
            {/* <p><b>Brand: </b> </p>  */}
            {this.state.cars
                ? this.state.cars.map((data, index) => {
              return (
                
                  <div className="profile-list-info">  
                    <Link to="/carDetail/:id"><img src={data.image} alt="Car Image" className=""/></Link>
                    <br/>
                    <p><b>Brand:   </b>{data.brand}</p>
                    <p><b>Model:   </b>{data.model}</p>
                  </div>  
              );
            })
          : null}
          
          
          </div>
        
          <Link to={`/createcar/${this.props.user._id}`}>
          
          <button className="profile-button">Add your car</button>
        </Link>
        </section>
      </div>
    );
  }
}

export default withAuth(Garage);