import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from './carousel/Carousel';
import NewsLetter from "./NewsLetter/NewsLetter";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
class Main extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <FeaturedSection />
        <NewsLetter />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
