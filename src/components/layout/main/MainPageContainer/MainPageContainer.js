import React from "react";
import Carousel from "../carousel/Carousel";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import NewsLetter from "../NewsLetter/NewsLetter";
import About from "../About/About";

const MainPageContainer = () => {
  return (
    <div>
      <Carousel />
      <FeaturedCategories />
      <FeaturedSection />
      <NewsLetter />
      <About />
    </div>
  );
};

export default MainPageContainer;
