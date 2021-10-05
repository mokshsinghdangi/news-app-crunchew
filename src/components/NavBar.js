import React, { Component } from "react";
// import PropTypes from "prop-types";

export class NavBar extends Component {
  // static propTypes = {};

  render() {
    return (
      <>
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
        <nav className="small-nav">
          <ul className="category-menu">
            <li className="category-items">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Business
              </a>
            </li>
            <li className="category-items">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Entertainment
              </a>
            </li>
            <li className="category-items">
              <a href="/" target="_blank" rel="noopener noreferrer">
                general
              </a>
            </li>
            <li className="category-items">
              <a href="/" target="_blank" rel="noopener noreferrer">
                health
              </a>
            </li>
            <li className="category-items">
              <a href="/" target="_blank" rel="noopener noreferrer">
                science
              </a>
            </li>
            <li className="category-items">
              <a href="/" target="_blank" rel="noopener noreferrer">
                sports
              </a>
            </li>
            <li className="category-items">
              <a href="/" target="_blank" rel="noopener noreferrer">
                technology
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
