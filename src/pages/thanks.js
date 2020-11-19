import React from "react";
import useTitle from "../hooks/useTitle";
import {
    
    NavLink,
    
  } from "reactstrap";


function Thanks ({ propdata }) {
  
  

  useTitle("Thank you!");

  return (
    <div className="container-fluid " >
      <h1 className="text-center">Thank you, we will reach out to your shortly. </h1>
      <h4><NavLink href="/">Back to home</NavLink></h4>
    </div>
  );
}
export default Thanks ;