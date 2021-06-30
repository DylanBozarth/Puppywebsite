import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "../newpages/frontpage.scss";
export const NewNav = () => {
  const [open1, setOpen] = useState('no')
  return (
    <div className="container-fluid">
      <div className="  row">
        <div className="nav-item col-sm-3">
          <p className="new-nav-button text-center nav-button-text" onClick={() => setOpen(!open1)}>
            Information
          </p>
          <div className={open1 ? `noShow` : `dropdown1`}>
            <NavLink to="/" className="drop-down-text">
              About us
            </NavLink>
            <p className="drop-down-text">About us</p>
            <p className="drop-down-text">About us</p>
          </div>
        </div>
        <div className="nav-item col-sm-3">
          <p className="new-nav-button text-center nav-button-text">Dogs</p>
        </div>
        <div className="nav-item col-sm-3">
          <p className="new-nav-button text-center nav-button-text">Reviews</p>
        </div>
        <div className="nav-item col-sm-3">
          <p className="new-nav-button text-center nav-button-text">Pawtree</p>
        </div>
      </div>
    </div>
  );
};
