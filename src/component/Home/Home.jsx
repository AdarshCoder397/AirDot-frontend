import React, { Fragment } from "react";
import { MdShoppingBasket } from "react-icons/md";
import ProductImg from "../../img/logo.png";
import "./Home.css";
import Product from "./Product.jsx";

const product = {
  name: "AirDot",
  images: [{ url: ProductImg }],
  price: "$35",
  _id: "adarsh",
};
const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>
          Welcome to the <span>AirDot</span>!
        </p>
        <h2>Best Place For You To Shop!</h2>
        <a href="#main">
          <button>
            <MdShoppingBasket />
            All Products
          </button>
        </a>
      </div>
      <div id="main">
        <h2 className="homeh2">Top Products</h2>
        <div className="container" id="container">
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
