import React from "react";


import useTitle from "../hooks/useTitle";

function BreedInfo() {
  useTitle("JYMR Doodles");
  return (
    <div className="container-fluid">
        <div className="row">
      <h1 className="puppytitle">Doodle facts</h1>
      <div className="col-sm-4">doodles</div>
      <div className="col-sm-4">doodles</div>
      <div className="col-sm-4">doodles</div>
    </div></div>
  );
}
export default BreedInfo;
