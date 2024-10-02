import React from "react";
import { Link } from "react-router-dom";
import './Products.css'
import Product from "./Product";

const Products = () => {
  return (
    <>
    <div className="products_row">
      <Product 
      id="1"
      title="Xbox Series Controller : Nocturnal Vapor Special Edition" 
      image="https://m.media-amazon.com/images/I/619XFKGW6jL._AC_SX679_.jpg"
      rating="4"
      price="1,399" />
       <Product 
      id="1"
      title="Huawei Fit 3 Aluminum Smart Watch, 1.82-Inch Size, Pink" 
      image="https://m.media-amazon.com/images/I/51J5NMoqK7L._AC_SX679_.jpg"
      rating="4"
      price="2,828" />
    </div>
    <div className="products_row">
    <Product 
      id="1"
      title="Razer Basilisk V3 Ergonomic Wired Gaming Mouse" 
      image="https://m.media-amazon.com/images/I/61WeAIZSmrL._AC_SY879_.jpg"
      rating="4"
      price="1,399" />
       <Product 
      id="1"
      title="Razer Ornata V3 Low Profile Gaming Keyboard" 
      image="https://m.media-amazon.com/images/I/715fbmjzRwL._AC_SX679_.jpg"
      rating="4"
      price="1,699" />
      <Product 
      id="1"
      title="Lenovo IdeaPad 1 15IAU7 Intel Core i5-1235U 8GB RAM 512GB SSD 15.6-Inch Full HD Laptop, Cloud Grey" 
      image="https://m.media-amazon.com/images/I/61TFeIzdtgL._AC_SX679_.jpg"
      rating="5"
      price="8,999" />
    </div>
    <div className="products_row">
    <Product 
      id="1"
      title="Razer Blackshark V2 X Gaming Headset" 
      image="https://m.media-amazon.com/images/I/71VjP2iOLBL._AC_SX679_.jpg"
      rating="4"
      price="1,2999" />
    </div>
    
    </>
    
  );
};

export default Products;
