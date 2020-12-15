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
          {/* <div className="card">
            {this.state.cars
                ? this.state.cars.map((data, index) => {
              return (
                <div className="cards-list">
                  <div className="card 1">
                  <div key={index} >  
                    <Link to={`/carDetail/${data._id}`}><img src={data.image} alt="Car Image" className="card_image"/></Link>
                    <br/>
                    </div>
                    <div className="details">
                    <h2 className="card_title title-white">Brand:<span>{data.brand} </span></h2>
                    <h2><b>Model:   </b>{data.model}</h2> 
                 </div>
                 </div>
                 </div>
              );
            })
          : null}
          
          </div>  
        */}
          <section className="garage">
            {this.state.cars
              ? this.state.cars.map((data, index) => {
                  return (
                    <>
                      <article className="cardGarage">
                        <Link to={`/carDetail/${data._id}`}>
                          <img src={data.image} alt="Car Image" />
                        </Link>
                        <h4>Brand: {data.brand}</h4>
                        <br />
                        <h4>Model: {data.model}</h4>
                      </article>
                    </>
                  );
                })
              : null}

            <div className="botones">
              <Link to={`/createcar/${this.props.user._id}`}>
                <button className="garageButton">Add your car</button>
              </Link>
              <Link to={`/profile`}>
                <button className="garageButton">Go back</button>
              </Link>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default withAuth(Garage);
