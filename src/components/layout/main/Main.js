import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsLetter from "./NewsLetter/NewsLetter";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import SingleProduct from "./SingleProduct";
class Main extends Component {
  render() {
    return (
      <div>
        <FeaturedSection />
        <NewsLetter />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
