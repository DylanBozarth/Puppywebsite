import React from "react";

import useTitle from "../hooks/useTitle";

function Aboutseg() {
  useTitle("Reputable Breeders");
  return (
    <div className="container-fluid">
      <h1 className="abouttitle">Here's how we love our puppers</h1>
        <div className="row">
        <div className="col-sm-4">
          <img width="300px" height="250px"  src="./puppies/shiba.jpg" alt="puppy1" />
          <p className="aboutdesc">Rigorous training</p>
        </div>
        <div className="col-sm-4">
          <img width="300px" height="250px"  src="./puppies/doodle.jpg" alt="puppy2"  />
          <p className="aboutdesc">Weaponized Cuteness</p>
        </div>
          <div className="col-sm-4">
          <img width="300px" height="250px" src="./puppies/poof.jpg" alt="puppy3" />
          <p className="aboutdesc">Extreme conditioning</p>
        </div>
      </div>
     
    </div>
  );
}
export default Aboutseg;