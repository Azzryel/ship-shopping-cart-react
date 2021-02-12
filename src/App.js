import React from "react";
import "./styles/app.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App" >
      <h1> Welcome to Jolly Roger </h1>

      <div className="container">
        <p> Get your own ship and set sails to explore the world and discover treasures!</p>
        <Link to="/shop">
          <button> Check it out </button>
        </Link>
      </div>

    </div>
  );
}

export default App;
