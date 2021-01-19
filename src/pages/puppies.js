import React from "react";
import useTitle from "../hooks/useTitle";


function Puppies({ propdata }) {
 
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
     <h1 className="puppyname">Upcoming litters</h1>
     
    </div>
  );
}
export default Puppies;
