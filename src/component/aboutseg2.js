import React from "react";

import useTitle from "../hooks/useTitle";

function Aboutseg() {
  useTitle("Reputable Breeders");
  return (
    <div className="container fluid">
      <h1 className="abouttitle">Here's how we love our puppers</h1>
        
        
          <img width="300px" height="250px"  src="./puppies/shiba.jpg" />
          <p className="aboutdesc">Rigorous training</p>
        
          <img width="300px" height="250px"  src="./puppies/doodle.jpg"  />
          <p className="aboutdesc">Weaponized Cuteness</p>
        
          <img width="300px" height="250px" src="./puppies/poof.jpg" />
          <p className="aboutdesc">Extreme conditioning</p>
        
      
      <h1 className="puppytitle">Some of our past greats</h1>
    </div>
  );
}
export default Aboutseg;