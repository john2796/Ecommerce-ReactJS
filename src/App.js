import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts, getOneProduct } from "./store/actions/productActions";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";

class App extends Component {
  componentDidMount = () => {
    this.props.onGetProducts();
    this.props.onGetSingleProduct("46a9d671-74a4-4112-a7ea-91e57059e99e");
  };
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

const mapStateToProps = state => ({
  products: state.products
});

const mapActionsToprops = {
  onGetProducts: getAllProducts,
  onGetSingleProduct: getOneProduct
};

export default connect(
  mapStateToProps,
  mapActionsToprops
)(App);
