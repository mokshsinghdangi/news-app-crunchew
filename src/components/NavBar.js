import React, { Component } from "react";
import PropTypes from "prop-types";

export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (
      <nav className="navbar">
        <div className="logo">SpiceHunt</div>
        <ul className="menu">
          <li className="items">
            <a href="/">Home</a>
          </li>
          <li className="items">
            <a href="/">News</a>
          </li>
          <li className="items">
            <a href="/">About</a>
          </li>
          <li className="items">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
