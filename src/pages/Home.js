import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";


function Home(props) {
  return (
    <div className="parking">
      <h1>Entra en tu garage</h1>
      <h2>El lugar donde almacenar tus coches</h2>
    </div>
  );
}


export default withAuth(Home);
