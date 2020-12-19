import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import service from "../lib/auth-service";

class CarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSingleCarDetail = async () => {
    try {
      let carDetails = await service.carDetail(this.props.match.params.id);
      this.setState({ car: carDetails });
    } catch (error) {
      console.log(error);
    }
  };

  deleteCar = () => {
    const { params } = this.props.match;
    axios
      .delete(`${process.env.REACT_APP_API_URI}/cars/${params.id}/delete`)
      .then(() => {
        this.props.history.push(`/garage/${this.props.user._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleCarDetail();
  }

  render() {
    return (
      <div>
        
        <div className="align">
        <h1>Car details</h1>
        <div className="cardDetail img"> 
            <img 
              src={this.state.car && this.state.car.image}
              alt="Car Image"
            ></img>
          </div>
        <table class="rwd-table">
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Engine</th>
            <th>Power</th>
            <th>Traction</th>
            <th>Fuel</th>
           
          </tr>
          <tr>
            <td data-th="Brand">{this.state.car && this.state.car.brand}</td>
            <td data-th="Model">{this.state.car && this.state.car.model}</td>
            <td data-th="Year">{this.state.car && this.state.car.year}</td>
            <td data-th="Engine">{this.state.car && this.state.car.engine}</td>
            <td data-th="Power">{this.state.car && this.state.car.power}</td>
            <td data-th="Traction">{this.state.car && this.state.car.traction}</td>
            <td data-th="Fuel">{this.state.car && this.state.car.fuel}</td>
          </tr>
          
        </table>
        </div>
        <div className="botones">
            
              <button className="carDetailsButton"><Link to={`/garage/${this.props.user._id}`}>Go back</Link></button>
            
        {this.props.user.id === this.state._id ? (
              <>
                <button className="carDetailsButton" onClick={() => this.deleteCar()}>
                  Delete
                </button>
                
                  <button className="carDetailsButton"><Link to={`/editcar/${this.props.match.params.id}`}>Edit car</Link></button>
                
              </>
            ) : null}
          </div>

       
        {/* <section className="carDetail">
          <div className="titleCardDetails">
            <h1>Car Details</h1>
          </div>

          <div className="cardDetail img"> 
            <img 
              src={this.state.car && this.state.car.image}
              alt="Car Image"
            ></img>
          </div>
        
          <div className="carDetailText">
            <p>
              
              <b>Brand: </b>
              {this.state.car && this.state.car.brand}
            </p>
            <p>
              <b>Model: </b>
              {this.state.car && this.state.car.model}
            </p>
            <p>
              <b>Year: </b>
              {this.state.car && this.state.car.year}
            </p>
            <p>
              <b>Engine: </b>
              {this.state.car && this.state.car.engine}
            </p>
            <p>
              <b>Power: </b>
              {this.state.car && this.state.car.power}
            </p>
            <p>
              <b>Traction: </b>
              {this.state.car && this.state.car.traction}
            </p>
            <p>
              <b>Fuel: </b>
              {this.state.car && this.state.car.fuel}
            </p>
            
          </div>
          <div className="botones">
            <Link to={`/garage/${this.props.user._id}`}>
              <button className="carDetailButton">Go back</button>
            </Link>

            {this.props.user.id === this.state._id ? (
              <>
                <button className="carDetailButton" onClick={() => this.deleteCar()}>
                  Delete
                </button>
                <Link to={`/editcar/${this.props.match.params.id}`}>
                  <button className="carDetailButton">Edit car</button>
                </Link>
              </>
            ) : null}
          </div>
        </section> */}
      </div>
    );
  }
}

export default withAuth(CarDetail);
