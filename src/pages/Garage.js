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
      let myCars = await service.garage(this.props.match.params.id);
      this.setState({ cars: myCars });
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
          
          <section className="garage">
            {this.state.cars
              ? this.state.cars.map((data, index) => {
                  return (
                    <>
                      <article className="cardGarage">
                        <Link to={`/carDetail/${data._id}`}>
                          <img src={data.image} alt="Car Image" />
                        </Link>
                        <h4> {data.brand}</h4>
                        <br />
                        <h4> {data.model}</h4>
                      </article>
                    </>
                  );
                })
              : null}
              </section>
              {/* <section> */}
            <div className="botones">
              <Link to={`/createcar/${this.props.user._id}`}>
                <button className="garageButton">Add your car</button>
              </Link>
              <Link to={`/profile`}>
                <button className="garageButton">Go back</button>
              </Link>
            </div>
            {/* </section> */}
          </section>
        
      </div>
    );
  }
}

export default withAuth(Garage);
