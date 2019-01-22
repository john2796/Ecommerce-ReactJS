import React, { Component } from "react";
import Carousel from "./carousel/Carousel";
import { Route } from "react-router-dom";

import MainPageContainer from "./MainPageContainer/MainPageContainer";
import SinglePageContainer from "./SinglePageContainer/SinglePageContainer";
class Main extends Component {
  render() {
    return (
      <div>
        <MainPageContainer />
        <SinglePageContainer />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
