import React from "react";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Puppies() {
  
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
      <div className="row">
      <div className="col-sm-8">
        <img src="./parents/leoandbella.jpg" className="img-fluid" alt="parents"></img>
        <img src="./parents/glittlepreview.jpg" className="img-fluid" alt="puppies"></img>
      </div>
      <div className="col-sm-4">
<h1 className="text-center homeinfo ">Reserve list </h1>
<div className=""></div>
<li>Available</li>
<li>Available</li>
<li>Available</li>
<li>Available</li>
<li>Available</li>
<li>Available</li>
<li>Available</li>
     </div></div>
    </div>
  );
}
export default Puppies;
