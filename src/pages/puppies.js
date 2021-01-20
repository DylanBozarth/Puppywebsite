import React from "react";
import useTitle from "../hooks/useTitle";

function Puppies({ propdata }) {
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
      <h1 className="puppyname text-center">Upcoming litters</h1>
      <div className="row">
        <div className="col-sm-4">
          <img
            src="./parents/leoandbella.jpg"
            alt="parents"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-sm-8">
          <h3 className="puppyname text-center biggertext">Waitlist for Leo and Bella</h3>
          <li className="puppyname bigtext">Open slot</li>  <li className="puppyname bigtext">Open slot</li>  <li className="puppyname bigtext">Open slot</li>  <li className="puppyname bigtext">Open slot</li>  <li className="puppyname bigtext">Open slot</li> 
        </div>
      </div>
    </div>
  );
}
export default Puppies;
