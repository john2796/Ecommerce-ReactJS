import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class MainNavbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink activeStyle={{ color: "red" }} to="/">
            HOME
          </NavLink>
          <NavLink to="/">SHOP</NavLink>
          <NavLink to="/">BLOG</NavLink>
          <NavLink to="/">PAGES</NavLink>
          <NavLink to="/">FEATURES</NavLink>
        </nav>
      </div>
    );
  }
}

MainNavbar.propTypes = {};

export default MainNavbar;
