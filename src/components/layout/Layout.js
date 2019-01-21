import React, { Component } from "react";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

import PropTypes from "prop-types";

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {};

export default Layout;
