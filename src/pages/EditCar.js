import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import service from "../lib/auth-service";
import { withAuth } from "../lib/AuthProvider";

class EditCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: this.props.brand,
      model: this.props.model,
      year: this.props.year,
      engine: this.props.engine,
      power: this.props.power,
      traction: this.props.traction,
      fuel: this.props.fuel,
      image: this.props.image,
      owner: this.props.owner,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {
      brand,
      model,
      year,
      engine,
      power,
      traction,
      fuel,
      image,
    } = this.state;

    axios
      .put(
        `${process.env.REACT_APP_API_URI}/cars/${this.props.match.params.id}/editcar`,
        {
          brand,
          model,
          year,
          engine,
          power,
          traction,
          fuel,
          image,
        }
      )
      .then(() => {
      this.props.history.push(`/garage/${this.props.user._id}`);
    })
      .catch((error) => {
      console.log(error);
      })
  };

  handleChangeCar = (event) => {
    const { name, value } = event.target;
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

  render() {
    //console.log(this.state.brand)
    return (
      <div>
        <h3>Edit your car</h3>
        <form className="edit-info" onSubmit={this.handleFormSubmit}>
          <label>Brand: </label>
          <input
            type="text"
            name="brand"
            value={this.state.brand}
            onChange={(e) => this.handleChangeCar(e)}
          />
          <br />
          <label>Model: </label>
          <input
            type="text"
            name="model"
            value={this.state.model}
            onChange={(e) => this.handleChangeCar(e)}
          />
          <br />
          <label>Year: </label>
          <input
            type="text"
            name="year"
            value={this.state.year}
            onChange={(e) => this.handleChangeCar(e)}
          />
          <br />
          <label>Engine: </label>
          <input
            type="text"
            name="engine"
            value={this.state.engine}
            onChange={(e) => this.handleChangeCar(e)}
          />
          <br />
          <label>Power: </label>
          <input
            type="text"
            name="power"
            value={this.state.power}
            onChange={(e) => this.handleChangeCar(e)}
          />
          <br />
          <label>Traction: </label>
          <input
            type="text"
            name="traction"
            value={this.state.traction}
            onChange={(e) => this.handleChangeCar(e)}
          />
          <br />
          <label>Fuel: </label>
          <input
            type="text"
            name="fuel"
            value={this.state.fuel}
            onChange={(e) => this.handleChangeCar(e)}
          />
          <br />
          <label>Image: </label>
          <input
            type="file"
            name="image"
            onChange={(e) => this.handleFileUpload(e)}
          />
          <br />
          <input type="submit" value="Submit" />
            
          <Link to={`/garage/${this.props.user._id}`}>
            <button className="login-button">Go back</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withAuth(EditCar);
