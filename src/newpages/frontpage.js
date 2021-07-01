import React from "react";
import { useState } from "react";
import useTitle from "../hooks/useTitle";
import PuppySeg from "../component/puppyseg";
import Instafeed from "../component/instafeed";
import "./frontpage.scss";
import NewKenburns from "../newcomponents/newKenburns";
import { NavLink } from "react-router-dom";
export const FrontPage = () => {
  useTitle("JYMR Doodles");
  return (
    <div className="frontPage">
      {/* start of ken burns */}
      <div className="kenBox row text-center">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <NewKenburns />
        </div>

        <div className="col-sm-2"></div>
      </div>
      {/* end of ken burns effect*/}
      {/* start of option bar */}
      <div className="row">
        <div className="col-sm-4">
          <NavLink to="/newpups">
            <img
              src="./assets/puppycard.png"
              alt="puppy"
              className="img-fluid puppyCard"
            ></img>{" "}
            <p className="puppyCardText">Browse our current litters!</p>
          </NavLink>
        </div>
        <div className="col-sm-4">
          <NavLink to="/about">
            <img
              src="./assets/homecardabout.png"
              alt="puppy"
              className="img-fluid puppyCard"
            ></img>{" "}
            <p className="puppyCardText">Get the 411 about JYMR doodles!</p>
          </NavLink>
        </div>
        <div className="col-sm-4">
          <a href="https://www.pawtree.com/jymrdoodles/myrecommendation/Standard-Package?fbclid=IwAR1x9IKyAO0ojODicSbSXWO7305bY4A3jnFoJZvPQaAHLBcMmMnqhjZXhPY">
            <img
              src="./assets/pawtreecard.png"
              alt="puppy"
              className="img-fluid puppyCard"
            ></img>{" "}
            <p className="puppyCardText ">
              Get the best nutrition for your dog!
            </p>
          </a>
        </div>
      </div>
      {/* end of option bar */}
      {/* start of quote*/}
      <div className="quoteWrapper">
        <div className="text-center nav-bar-logo">
          {" "}
          <img
            src="./assets/logowhite.png"
            width="220px"
            height="220px"
            className="img-fluid"
            alt="doodle logo"
          ></img>
          <p className="homeQuote">
            "A dog is the only thing on Earth that loves you more than you can
            love yourself"
          </p>
        </div>
      </div>
      {/* end of quote and logo */}
      <div className="row SMStuff">
        <div className="col-sm-2"></div>
        <div className="col-sm-2">
          <a href="https://www.facebook.com/JYMRdoodles/"  target="_blank" rel="noopener noreferrer">
            <img
              src="./assets/facebook.png"
              className="img-fluid SMLink"
              alt="facebook"
            ></img>
          </a>
        </div>
        <div className="col-sm-4"> <NavLink to="/application">
        <div className="text-center">
          <img
            src="./assets/cloud.png"
            alt="goldendoodle" className="img-fluid"
          ></img>
          <h3 className="puppyCardText">Adoption Application</h3>
        </div>
      </NavLink></div>
        <div className="col-sm-2">
          <a href="https://www.instagram.com/jymr_doodles/" target="_blank" rel="noopener noreferrer"> 
            {" "}
            <img
              src="./assets/instagramlogo.png"
              className="img-fluid SMLink"
              alt="instagram"
            ></img>
          </a>
        </div>
        <div className="col-sm-2"></div>
      </div>
     
    </div>
  );
};
