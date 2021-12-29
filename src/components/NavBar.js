import React from "react";
import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

const NavBar = () => {
  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="logo">Crunchew</div>
        <ul className="menu">
          <li className="items">
            <Link to="/">Home</Link>
          </li>
          <li className="items">
            <Link to="/">News</Link>
          </li>
          <li className="items">
            <Link to="/">About</Link>
          </li>
          <li className="items">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="small-nav">
        <ul className="category-menu">
          <li className="category-items">
            <Link to="/business">Business</Link>
          </li>
          <li className="category-items">
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className="category-items">
            <Link to="/health">health</Link>
          </li>
          <li className="category-items">
            <Link to="/science">science</Link>
          </li>
          <li className="category-items">
            <Link to="/sports">sports</Link>
          </li>
          <li className="category-items">
            <Link to="/technology">technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
