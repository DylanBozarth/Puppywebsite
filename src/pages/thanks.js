import React from "react";
import useTitle from "../hooks/useTitle";
import {
    
    NavLink,
    
  } from "reactstrap";


function Thanks ({ propdata }) {
  
  

  useTitle("Thank you!");

  return (
    <div className="container-fluid innerpage">
      <h1>You shouldn't be here, this is my testing page</h1>
    <div className="row">
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
          <li>Available</li>
          <li>Available</li>
          <li>Available</li>
          <li>Available</li>
          <li>Available</li>
          <li>Available</li>
          <li>Available</li>
        </div>
        <NavLink className="homeinfo text-center" href="/application">Puppy adoption Application</NavLink>
      </div>
      <div className="col-sm-4">
        <img
          src="./parents/glitterpreview.jpg"
          className="img-fluid"
          alt="puppies"
        ></img></div>
    </div>
  </div>
  );
}
export default Thanks ;