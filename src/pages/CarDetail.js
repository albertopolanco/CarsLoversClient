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
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  getSingleCarDetail = async () => {
    try {
     
      let carDetails = await service.carDetail(this.props.match.params.id);
      this.setState({ car: carDetails });
    } catch (error) {
      console.log(error);
    }
  
  };

  // deleteCar = async () => {
  //   try {
  //     await service.carDetail(this.props.match.params.id);
  //     this.props.history.push(`/garage/${this.props.user._id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


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
    console.log(this.state.car, "ooooooooooooo");
    return (
      <div className="">
        <h1>Car Details</h1>
        <div className="">
          <div className="">
            <img src={this.state.car && this.state.car.image} alt="Car Image"></img>
          </div>

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
        <div className="">
          <Link to={`/garage/${this.props.user._id}`}>
            <button className="">Go back</button>
          </Link>
          
          {this.props.user.id === this.state._id ? (
            <>
              <button className="" onClick={() => this.deleteCar()}>
                Delete Car
              </button>
              <Link to={`/editcar/${this.props.match.params.id}`}>
                <button className="">Edit car</button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    );
  }
};

export default withAuth(CarDetail);