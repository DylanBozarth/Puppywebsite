import React from "react";
import useTitle from "../hooks/useTitle";
import _ from "lodash";
import {
  
  NavLink
 
} from "reactstrap";
function Puppies({propdata}) {
  useTitle("Your Next Dog");
 const heartattack = _.get(propdata, 'heartattack', []);
 const heartattacktheme = _.get(propdata, 'heartattacktheme', []);
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
      <h2 className="text-center puppyname">Lily and Dasher's new litter </h2>
      <h2 className="text-center puppyname">The Heart Attack Doods</h2>
      <div className="text-center">
        {heartattacktheme
          .filter((x) => x.image !== "")
          .map((heartattacktheme) => (
            <img
              src={heartattacktheme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="row">
    
      {heartattack
          
          .map((heartattack) => (
            <div className="col-sm-4" key={heartattack.name}>
              <img
                className="homecard frame img-fluid"
                src={heartattack.image}
                alt="goldendoodle"
              />
              <h1 className="puppyname">{heartattack.name}</h1>

              <p className="puppysubtitle">{heartattack.description}</p>
            </div>
          ))}
     
       
       
        
      </div>
    </div>
  );
}
export default Puppies;
