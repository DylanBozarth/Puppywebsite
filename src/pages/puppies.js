import React from "react";
import useTitle from "../hooks/useTitle";


function Puppies({ propdata }) {
 
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
     <h1 className="puppyname text-center">Upcoming litters</h1>
     <img src="./parents/leoandbella.jpg" alt="parents" className="img-fluid"></img>
    </div>
  );
}
export default Puppies;
