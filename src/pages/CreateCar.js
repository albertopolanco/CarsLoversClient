import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import service from "../lib/auth-service";
import { withAuth } from "../lib/AuthProvider";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      model: "",
      year: "",
      engine: "",
      power: "",
      traction: "",
      fuel: "",
      image: "",
      owner: "",
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
      .post(
        `${process.env.REACT_APP_API_URI}/cars/${this.props.match.params.id}/createcar`,
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
      .then(() => {})
      .catch((error) => console.log(error));
    this.props.history.push(`/garage/${this.props.match.params.id}`);
  };
  handleCreateCar = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = async (e) => {
    const upload = new FormData();
    upload.append("image", e.target.files[0]);
    try {
      const res = await service.handleUpload(upload);
      this.setState({ image: res.secure_url });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="createCarBackground">
        <h1 className="titleCreate">Create your car</h1>
        <form className="edit-info" onSubmit={this.handleFormSubmit}>
          <label>Brand: </label>
          <input
            type="text"
            name="brand"
            value={this.state.brand}
            onChange={(e) => this.handleCreateCar(e)}
          />
          <br />
          <label>Model: </label>
          <input
            type="text"
            name="model"
            value={this.state.model}
            onChange={(e) => this.handleCreateCar(e)}
          />
          <br />
          <label>Year: </label>
          <input
            type="text"
            name="year"
            value={this.state.year}
            onChange={(e) => this.handleCreateCar(e)}
          />
          <br />
          <label>Engine: </label>
          <input
            type="text"
            name="engine"
            value={this.state.engine}
            onChange={(e) => this.handleCreateCar(e)}
          />
          <br />
          <label>Power: </label>
          <input
            type="text"
            name="power"
            value={this.state.power}
            onChange={(e) => this.handleCreateCar(e)}
          />
          <br />
          <label>Traction: </label>
          <input
            type="text"
            name="traction"
            value={this.state.traction}
            onChange={(e) => this.handleCreateCar(e)}
          />
          <br />
          <label>Fuel: </label>
          <input
            type="text"
            name="fuel"
            value={this.state.fuel}
            onChange={(e) => this.handleCreateCar(e)}
          />
          <br />
          <br />
          <label>Image: </label>
          <input
            type="file"
            name="image"
            onChange={(e) => this.handleFileUpload(e)}
          />
          <br />
          <input type="submit" value="Submit" />

          <button className="login-button">
            <Link to={`/garage/${this.props.user._id}`}>Go back</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default withAuth(Create);
