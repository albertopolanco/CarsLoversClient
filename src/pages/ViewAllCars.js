import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

class ViewAllCars extends Component {
  constructor() {
    super();
    this.state = { listAllCars: [] };
  }
  getAllCars = () => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/cars/allcars`)
      .then((allCars) => {
        this.setState({
          listAllCars: allCars.data,
        });
      });
  };

  componentDidMount() {
    this.getAllCars();
  }
  render() {


    return (
      <div className="allCarsBackground">
        <section className="titleAllCars">
          <h1>Coches de usuarios</h1>
        </section>
        <section>
          <section className="allCars">
            {this.state.listAllCars.map((cars) => {
/*               console.log(cars.brand)
 */                  return (
                    <div key={cars._id}>
                    
                      <article className="cardAllCars">
                        <Link to={`/CarDetailsUsers/${cars._id}`}>
                          <img src={cars.image } alt="Car Image" />
                        </Link>
                        {/* <img src={cars.image} alt="Car Image" / */}
                        <b>Usuario: </b> {cars.owner ? cars.owner.username : null}
                        
                        <h4> {cars.brand}</h4>
                        <br />
                        <h4> {cars.model}</h4>
                      </article>
                    </div>
                  );
                })
              }
                </section>
          <div className="botones">
            {/* <button className="garageButton">
              <Link to={`/createcar/${this.props.user._id}`}>Add your car</Link>
            </button> */}

            {/* <button className="garageButton">
              <Link to={`/cars/allcars`}>Ver coches usuarios</Link>
            </button> */}
            
            <button className="garageButton">
              <Link to={`/profile`}>Go back</Link>
            </button>
          </div>
        </section>
      </div>
    );
    /* return (
      <div className="garageBackground">
        <section className="allcars">
          <h1>Lista de vehículos</h1>
        </section> */


        
        
          {/* {this.state.listAllCars.map((cars) => {
            return (
              <div key={cars}>
                <article className="cardGarage">
                <p> */}
                  {/* <b>Usuario: </b> {cars.user} */}
                  {/* <b>Brand:</b> {cars.brand}
                  <b>Model: </b> {cars.model}
                  <img src={cars.image} alt="Car Image" />
                </p>
                </article>
              </div>
            );
          })} */}
        
  {/*       <Link to={`/garage/${this.props.user._id}`}>
              <button className="login-button">Go back</button>
            </Link>
      </div>
    ); */}
    
  }
}

export default withAuth(ViewAllCars);
