import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../newpages/frontpage.scss";
export const NewNav = () => {
  const [open1, setOpen] = useState(false);

  const [open2, setOpen2] = useState(false);
  

  
const OpenNum1 = () => {
  setOpen(!open1)
  setOpen2(false)
}
const OpenNum2 = () => {
  setOpen2(!open2)
  setOpen(false)
}
  return (
    <div className="container-fluid">
      <div className="  row">
        <div className="nav-item col-sm-3" onClick={() => OpenNum1() }>
          <p className="new-nav-button text-center nav-button-text">
            Infurmation
          </p>
          <div className={open1 === false ? `noShow` : `dropdown1 text-center`}>
            <NavLink to="/about" className="drop-down-text puppyCardText">
              <p className="drop-down-text puppyCardText">About us</p>
            </NavLink>
            <NavLink to="/breedinfo"className="drop-down-text puppyCardText">
              <p className="drop-down-text puppyCardText">Doodle Facts</p>
            </NavLink>
            <NavLink to="/FAQ" className="drop-down-text puppyCardText">
              <p className="drop-down-text puppyCardText">F.A.Q.</p>
            </NavLink>
            <NavLink to="/" className="drop-down-text puppyCardText">
              <p className="drop-down-text puppyCardText">Home</p>
            </NavLink>
          </div>
        </div>
        <div
          className="nav-item col-sm-3"
          onClick={() => {
           OpenNum2()
          }}
        >
          <p className="new-nav-button text-center nav-button-text">Dogs</p>
          <div className={open2 === false ? `noShow` : `dropdown2 text-center`}>
            <NavLink to="/newpups" className="drop-down-text puppyCardText">
              <p className="drop-down-text puppyCardText">Current Litters</p>
            </NavLink>
            <NavLink to="/featured" className="drop-down-text puppyCardText">
              <p className="drop-down-text puppyCardText">Featured Puppies</p>
            </NavLink>
            <NavLink to="/rainbowbridge" className="drop-down-text puppyCardText">
              <p className="drop-down-text puppyCardText">Past Doodles</p>
            </NavLink>
            <NavLink to="/application" className="drop-down-text puppyCardText">
              <p className="drop-down-text puppyCardText">Puppy Application</p>
            </NavLink>
          </div>
        </div>
        <div className="nav-item col-sm-3">
          <NavLink to="/reviews" className=" puppyCardText"><p className="new-nav-button text-center nav-button-text">Reviews</p></NavLink>
        </div>
        <div className="nav-item col-sm-3">
          <a href="https://www.pawtree.com/jymrdoodles/myrecommendation/Standard-Package?fbclid=IwAR1x9IKyAO0ojODicSbSXWO7305bY4A3jnFoJZvPQaAHLBcMmMnqhjZXhPY" className="puppyCardText">  <p className="new-nav-button text-center nav-button-text">Pawtree</p></a>
        </div>
      </div>
    </div>
  );
};
