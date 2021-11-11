import React from "react";
import { NavLink } from "reactstrap";
function Guardians() {
  return (
    <div className="container-fluid innerpage">
      <NavLink href="/guardiancontract" className="contractlink wipe text-center">
        View Guardian's Contract
      </NavLink>
      <div className="hero ">
        <h1>Meet our team</h1>
        <p>Some more information! </p>
        <img src="./assets/team.jpg" alt='team'  className="img-fluid" />
        <div className="bar"></div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img className="homecard frame" src="./assets/1.jpg" alt="Aaron" />
          <h1 className="puppyname">Aaron</h1>

          <p className="homeinfo">
            Aaron has over 20 years of relavent puppy experience
          </p>
        </div>
        <div className="col-sm-4">
          <img className="homecard frame" src="./assets/2.jpg" alt="Aaron" />
          <h1 className="puppyname">Tom</h1>

          <p className="homeinfo">Tom is part canine. </p>
        </div>
        <div className="col-sm-4">
          <img className="homecard frame" src="./assets/3.jpg" alt="Aaron" />
          <h1 className="puppyname">Emily</h1>

          <p className="homeinfo">
            Emily can communicate with puppies telepathically.{" "}
          </p>
        </div>
        
      </div>
     
    </div>
  );
}
export default Guardians;
