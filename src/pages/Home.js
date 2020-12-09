import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";


function Home(props) {
  return (
    <div className="parking">
      <h1>Entra en tu garage</h1>
    </div>
  );
}



// class Home extends Component {

//   constructor() {
//     super();
//     this.state = { listOfCars: [] }
//   }

//   getCars = () => {
//     axios.get(`${process.env.REACT_APP_API_URI}/`)
//     .then((Cars) => {
//       this.setState({
//         listOfCars: Cars.data,
//       });
//     });
//   };
//   componentDidMount() {
//     this.getCars();
//   }

//   render() {
//     return (
//       <div>
//         <div className="home">
//           <div className="home title">
//             <h1>Welcome:   {this.props.user.username}</h1>
//             <h1>Age:   {this.props.user.age}</h1>
//             <h1>Country:   {this.props.user.country}</h1>
//             <h1>City:   {this.props.user.city}</h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// function Home(props) {
//   console.log(this.props.user.username, "userrrr")
//   return (
//     <div>
//       <div className="home">
//         <div className="home title">
//       <h1>Welcome {this.props.user.username}</h1>
//       </div>
//       </div>
//     </div>
//   )
// }

export default withAuth(Home);
