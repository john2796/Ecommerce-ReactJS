import React, { Component } from "react";
import Carousel from "./carousel/Carousel";
import { Route } from "react-router-dom";

import NewsLetter from "./NewsLetter/NewsLetter";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import About from "./About/About";
import SingleProduct from "./singleProduct/SingleProduct";
class Main extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <FeaturedCategories />
        <FeaturedSection />
        <NewsLetter />
        <About />
        <Route exact to="/singleproduct" component={SingleProduct} />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
