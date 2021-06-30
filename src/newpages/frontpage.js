import React from "react";
import useTitle from "../hooks/useTitle";
import PuppySeg from "../component/puppyseg";
import Instafeed from "../component/instafeed";
import "./frontpage.scss";
import NewKenburns from "../newcomponents/newKenburns";
import { Link } from "react-router-dom";
export const FrontPage = () => {
  useTitle("JYMR Doodles");
  return (
    <div className="frontPage">
      <div className="kenBox row text-center">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <NewKenburns />
        </div>

        <div className="col-sm-2"></div>
      </div>
      {/* end of ken burns effect*/}
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
      <div className="row">
          <Link to="/newpups">
        <div className="col-sm-4">
          <img
            src="./assets/puppycard.png"
            alt="puppy"
            className="img-fluid puppyCard"
          ></img>{" "}
          <p className="puppyCardText">SEE THE PUPPIES</p>
        </div></Link>
        <div className="col-sm-4">
          <img
            src="./assets/homecardabout.png"
            alt="puppy"
            className="img-fluid puppyCard"
          ></img>{" "}
         <p className="puppyCardText">SEE THE PUPPIES</p>
        </div>
        <div className="col-sm-4">
          <img
            src="./assets/pawtreecard.png"
            alt="puppy"
            className="img-fluid puppyCard"
          ></img>{" "}
          <p className="puppyCardText">SEE THE PUPPIES</p>
        </div>
      </div>
    </div>
  );
};
