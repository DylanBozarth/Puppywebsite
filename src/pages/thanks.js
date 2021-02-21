import React from "react";
import useTitle from "../hooks/useTitle";
import { NavLink } from "reactstrap";
import _ from "lodash";
function Thanks({ propdata }) {
 
      useTitle("TEST PAGE PLZ IGNORE");
  const globaldoods = _.get(propdata, "globaldoods", []);
  const globaldoodstheme = _.get(propdata, "globaldoodstheme", []);
  return (
    <div className="container-fluid innerpage">
      <h2 className="text-center puppyname">The Global Doods</h2>
      <div className="text-center">
        {globaldoodstheme
          .filter((x) => x.image !== "")
          .map((globaldoodstheme) => (
            <img
              src={globaldoodstheme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="row">
    
      {globaldoods
          
          .map((globaldoods) => (
            <div className="col-sm-4" key={globaldoods.name}>
              <img
                className="homecard frame img-fluid"
                src={globaldoods.image}
                alt="goldendoodle"
              />
              <h1 className="puppyname">{globaldoods.name}</h1>

              <p className="puppysubtitle">{globaldoods.description}</p>
            </div>
          ))}
     
       
       
        
      </div>
      <br /><br /><br /><br />
      <h2 className="text-center puppyname">Lily and Dasher </h2>
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
            <li>Brocca Family: Female</li>
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
        <img
            src="./parents/heartpreview.jpg"
            className="img-fluid"
            alt="puppies"
          ></img>
       <p class="homeinfo">The Heart-Attack Doods are F1b Moyan-Standard Goldendoodles. Their approximate adult weight will be 45 pounds and up.</p>
        </div>
      </div>
    </div>
  );
}
export default Thanks;
