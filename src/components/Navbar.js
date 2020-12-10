import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className='navbar'>
       
      
    
        <Link to={"/"} id='home-btn'>
          <h4>Home</h4>
        </Link>
        
        {isLoggedin ? (
          <div className="navbar-logged">
          <button className="navbar-button" onClick={this.props.logout}>
            Logout
          </button>
          <button className="navbar-button">
            <Link to={`/profile`}>
            Profile
            </Link>
            </button>
          </div>
      ) : (
        <div className="navbar-logged">
          <Link to="/login">
            <button className="navbar-button">Login</button>
          </Link>
          <br />
          <Link to="/signup">
            <button className="navbar-button">SignUp</button>
          </Link>
        </div>
      )}
    
    </nav>
      //     <>
           
      //       <button className='navbar-button' onClick={logout}>Logout</button>
      //     </>
      //   ) : (
      //     <>
      //       <Link to='/login'>
      //         <button className='navbar-button'>Login</button>
      //       </Link>
      //       <br />
      //       <Link to='/signup'>
      //         <button className='navbar-button'>Sign Up</button>
      //       </Link>
      //     </>
      //   )}
      // </nav>
    );
  }
}

export default withAuth(Navbar);
