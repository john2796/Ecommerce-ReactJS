import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsLetter from "./NewsLetter/NewsLetter";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main Components</h1>
        <FeaturedSection />
        <NewsLetter />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
