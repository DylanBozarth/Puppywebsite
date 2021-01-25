import React from "react";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Puppies() {
  
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
      <div className="row">
      <div className="col-sm-8">
        <img src="./parents/leoandbella.jpg" alt="parents"></img>
        
      </div>
<h1>LIST</h1>
     </div>
    </div>
  );
}
export default Puppies;
