import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-elastic-carousel";
export const Featured = () => {
  return (
    <div className="innerpage container-fluid ">
      <h3 className="text-center puppyname puppytitle">The K litter!</h3>

      <h5 className="text-center puppyname puppytitle">
        Names are to be decided{" "}
      </h5>
      <div className="row">
        <div className="col-sm-2"></div>
        <Carousel itemsToShow={1} className="col-sm-8">
          <div>
            <img
              src="./currentpuppies/klitter/1.jpg"
              className="homecard  img-fluid "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/2.jpg"
              className=" homecard  img-fluid "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/3.jpg"
              className="homecard  img-fluid  "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/4.jpg"
              className=" homecard  img-fluid "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/5.jpg"
              className="homecard  img-fluid  "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/6.jpg"
              className="homecard  img-fluid  "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/7.jpg"
              className=" homecard  img-fluid "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
        </Carousel>

        <div className="col-sm-2"></div>
      </div>
      <h5 className="text-center puppyname puppytitle">
        <NavLink to="/newpups"> Check out our other doods!</NavLink>
      </h5>
    </div>
  );
};
