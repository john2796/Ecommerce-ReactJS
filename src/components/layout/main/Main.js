import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsLetter from "./NewsLetter/NewsLetter";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import About from "./About/About";
class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main Components</h1>
        <FeaturedCategories />
        <FeaturedSection />
        <NewsLetter />
        <About />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
