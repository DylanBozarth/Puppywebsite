import React from "react";
import { NavLink } from "react-router-dom";
export const NewFoot = () => {
  return (
    <div className="newFooter">
      <div className="row">
        <div className="col-sm-6">
          <img
            src="./assets/logosquare.png"
            alt="Doodles"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-sm-6">
        <h4  className="text-center ">Quick Links</h4>
         <div className="text-center">
            <NavLink to="/newpups">Current Litters</NavLink>
            <br />
            <NavLink to="/about">About us</NavLink> 
            <br />
            <NavLink to="/reviews">Reviews</NavLink>
            <br />
            <NavLink to="/FAQ">FAQ</NavLink>
            <br />
            <NavLink to="/application">Adoption application</NavLink>
           </div>
        </div>
      </div>
    </div>
  );
};
