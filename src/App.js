import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts, getOneProduct } from "./store/actions/productActions";
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    this.props.onGetProducts();
    this.props.onGetSingleProduct("46a9d671-74a4-4112-a7ea-91e57059e99e");
  };
  render() {
    return (
      <div className="App">
        <h1>tesitng</h1>
      </div>
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
