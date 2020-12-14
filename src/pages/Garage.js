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
        
      <div className="garageBackground">
        <section>
          <div className="titleGarage">
        <h1>My Garage</h1>
        </div>
        </section>
        <section>
          
        
       
          <div className="box">
            <div className="card">
            {this.state.cars
                ? this.state.cars.map((data, index) => {
              return (
                <div>
                  <div key={index} className="imgBx">  
                    <Link to={`/carDetail/${data._id}`}><img src={data.image} alt="Car Image" className=""/></Link>
                    <br/>
                    </div>
                    <div className="details">
                    <h2 className="">Brand:<span>{data.brand} </span></h2>
                    <h2><b>Model:   </b>{data.model}</h2>
                 </div>
                 </div>
              );
            })
          : null}
          
          </div>
          </div>
        
          <Link to={`/createcar/${this.props.user._id}`}>
          
          <button className="profile-button">Add your car</button>
        </Link>
        <Link to={`/profile`}>
            <button className="login-button">Go back</button>
          </Link>
          
        
          </section>
      </div>
      
    );
  }
}

export default withAuth(Garage);