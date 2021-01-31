import React from "react";
import useTitle from "../hooks/useTitle";
import _ from "lodash";
import {
  
  NavLink
 
} from "reactstrap";
function Puppies() {
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
      <h2 className="text-center puppyname">Leo and Bella</h2><div className="row">
        
        <div className="col-sm-4">
          <img
            src="./parents/leoandbella.jpg"
            className="img-fluid"
            alt="parents"
          ></img>
        </div>
        <div className="col-sm-4">
          <h1 className="text-center homeinfo ">Reserve list </h1>
          <div className="waitlist">
            <li>Janell -Undecided</li>
            <li>Mia -Female</li>
            <li>Available</li>
            <li>Available</li>
            <li>Available</li>
            <li>Available</li>
            <li>Available</li>
          </div>
          <NavLink className="homeinfo text-center" href="/application">
            Puppy adoption Application
          </NavLink>
        </div>
        <div className="col-sm-4">
          <img
            src="./parents/glitterpreview.jpg"
            className="img-fluid"
            alt="puppies"
          ></img>
        </div>
      </div>
      <br /><br /><br /><br />
      <h2 className="text-center puppyname">Lily and Dasher</h2>
      <div className="row">
        
        <div className="col-sm-4">
          <img
            src="./parents/lilyandasher.jpg"
            className="img-fluid"
            alt="parents"
          ></img>
        </div>
        <div className="col-sm-4">
          <h1 className="text-center homeinfo ">Reserve list </h1>
          <div className="waitlist">
            <li>Available</li>
            <li>Available</li>
            <li>Available</li>
            <li>Available</li>
            <li>Available</li>
            <li>Available</li>
            <li>Available</li>
          </div>
          <NavLink className="homeinfo text-center" href="/application">
            Puppy adoption Application
          </NavLink>
        </div>
        <div className="col-sm-4">
          
        </div>
      </div>
    </div>
  );
}
export default Puppies;
