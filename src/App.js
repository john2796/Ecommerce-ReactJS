import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNavbar />
        </div>
      </Router>
    );
  }
}

export default App;
