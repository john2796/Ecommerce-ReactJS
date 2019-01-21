import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logoSvg from "../../../assets/logo-basel.svg";

const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  min-height: 100px;
  border: 1px solid red;
  justify-content: space-evenly;

  .nav__parent {
    a {
      margin-right: 25px;
      text-decoration: none;
      font-size: 13px;
      color: black;
    }
  }

  .navbar_logo {
    img {
      width: 200px;
    }
  }

  .nav-right {
    .nav_right_items_01 {
      &:after {
        content: "\e08a";
        font-family: Simple-Line-Icons;
      }
    }
  }
`;

class Navbar extends Component {
  render() {
    return (
      <NavStyle>
        <div className="nav__parent">
          <NavLink to="/home" activeStyle={{ color: "#00AAA3" }}>
            HOME
          </NavLink>
          <NavLink to="/shop" activeStyle={{ color: "#00AAA3" }}>
            SHOP
          </NavLink>
          <NavLink to="/blog" activeStyle={{ color: "#00AAA3" }}>
            BLOG
          </NavLink>
          <NavLink to="/pages" activeStyle={{ color: "#00AAA3" }}>
            PAGES
          </NavLink>
          <NavLink to="/features" activeStyle={{ color: "#00AAA3" }}>
            FEATURES
          </NavLink>
        </div>
        <div className="navbar_logo">
          <img src={logoSvg} alt="logo" />
        </div>
        <div className="nav_right">
          <span className="nav_right_items nav_right_items_01">search</span>
          <span className="nav_right_items nav_right_items_02">
            <i className="far fa-heart" />
          </span>
          <span className="nav_right_items nav_right_items_03">
            <i class="fas fa-shopping-cart" />
          </span>
        </div>
        <div />
      </NavStyle>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
