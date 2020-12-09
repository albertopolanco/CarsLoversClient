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
          let carDetails = await service.carDetail(this.props.match.params._id)
          this.setState({ car: carDetails});
        } catch (error) {
            console.log(error);
        }
        // const { params } = this.props.match;
        console.log(this.props.match._id, "333333333333333")
        // axios
        //   .get(`${process.env.REACT_APP_API_URI}/cardetail/${this.props.match.params.id}`)
        //   .then((carDetails) => {
        //     const thecarDetails = carDetails.data;
        //     this.setState(thecarDetails);
        //     console.log(carDetails, "222222222222222")
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
          
      };

      DeleteCar = () => {
        const { params } = this.props.match;
        axios
          .delete(`${process.env.REACT_APP_API_URI}/car/delete/${params.id}`)
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
        console.log(this.props.user.id, "ooooooooooooo")
        return (
            <div className="">
            <h1>Car Details</h1>
            <div className="">
            <div className="">
              <img
                
                src={this.state.image}
                alt="Car Image"
              ></img>
              </div>
    
              <p><b>Brand: </b>{this.state.brand}</p>
              <p><b>Model: </b>{this.state.model} </p>
              <p><b>Year: </b>{this.state.year} </p>
              <p><b>Engine: </b>{this.state.engine} </p>
              <p><b>Power:   </b>{this.state.power}</p>
              <p><b>Traction: </b>{this.state.traction}</p>
              <p><b>Fuel: </b>{this.state.fuel}</p>
              
            </div>
            <div className="details-buttons">
            <button className="login-button">
            <Link to={`/garage/${this.props.user._id}`}>Go back</Link>
            </button>
            {this.props.user.id === this.state.owner ? (
              <>
                <button className="login-button" onClick={() => this.DeleteCar()}>
                  Delete Car
                </button>
                <Link to={`/editcar/${this.props.match.params.id}`}>
                  <button className="login-button">Edit car</button>
                </Link>
              </>
            ) : null}
          </div>
          </div>
        )
    }
}







export default withAuth(CarDetail);




{/* <Link to={`/editCar/${this.props.user._id}`}>
          
<button className="profile-button">Edit Car</button>
</Link>

 */}