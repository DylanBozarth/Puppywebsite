import React from "react";
import { NavLink } from "react-router-dom";
export const NewFoot = () => {
  return (
    <div className="newFooter">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
          <img
            src="./assets/logosquare.png"
            alt="Doodles"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-sm-4">
        <h3  className="text-center ">Quick Links</h3>
         <div className="text-center">
            <NavLink to="/newpups" className="puppyCardText">Current Litters</NavLink>
            <br />
            <NavLink to="/about" className="puppyCardText">About us</NavLink> 
            <br />
            <NavLink to="/reviews"  className="puppyCardText">Reviews</NavLink>
            <br />
            <NavLink to="/FAQ"  className="puppyCardText">FAQ</NavLink>
            <br />
            <NavLink to="/application"  className="puppyCardText">Adoption application</NavLink>
           </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};
