import React from "react";
import Carousel from "./carousel/Carousel";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import NewsLetter from "./NewsLetter/NewsLetter";
import About from "./About/About";
import LatestNews from "./LatestNews/LatestNews";

const MainPageContainer = () => {
  return (
    <div>
      <Carousel />
      <FeaturedCategories />
      <FeaturedSection />
      <NewsLetter />
      <LatestNews />
      <About />
    </div>
  );
};

export default MainPageContainer;
