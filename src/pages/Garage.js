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
        <section className="titleGarage">
        
            <h1>My Garage</h1>
         
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
              
                <button className="garageButton"><Link to={`/createcar/${this.props.user._id}`}>Add your car</Link></button>
              
              
                <button className="garageButton"><Link to={`/profile`}>Go back</Link></button>
              
            </div>
            {/* </section> */}
          </section>
        
      </div>
    );
  }
}

export default withAuth(Garage);
