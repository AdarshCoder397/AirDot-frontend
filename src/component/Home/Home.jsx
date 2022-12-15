import React, { Fragment, useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import "./Home.css";
import Product from "./Product.jsx";
import MetaData from "../layout/MetaData";
import {getProduct} from '../../actions/productAction'
import {useSelector,useDispatch} from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const {loading,error,products,productsCount} = useSelector(state => state.products)
  console.log(productsCount,products,error,loading)
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  
  return (
    <Fragment> 
      <MetaData title={"AirDot"}/>
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
          {products && products.map(product=> <Product product={product}/>)}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
