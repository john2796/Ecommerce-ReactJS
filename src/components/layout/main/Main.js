import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsLetter from "./NewsLetter/NewsLetter";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main Components</h1>
        <NewsLetter />
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
