import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <div className="navigaton">
        <Navbar.Brand href="#"> </Navbar.Brand>

        <li>
          <Link exact to="/Home" activeClassName="nav-active">
            Home
          </Link>
        </li>

        <li>
          <Link exact to="/Pres" activeClassName="nav-active">
            Pres
          </Link>
        </li>

        <li>
          <Link exact to="/Adherent" activeClassName="nav-active">
            Adherent
          </Link>
        </li>
        <li>
          <Link exact to="/Registration" activeClassName="nav-active">
            Registration
          </Link>
        </li>
        <li>
          <Link exact to="/Login" activeClassName="nav-active">
            Login
          </Link>
        </li>

        
      </div>
    </>
  );
};
export default Navigation;
