import React from "react";

import styles from "./Product.module.css";

const product = props => {
  return (
    <div className="product-item">
      <div className="item-thumb">
        <span className="badge new">New</span>
        <img
          src={require(`assets/images/products/fashion/${props.code}.jpg`)}
          className="img-responsive"
          alt=""
        />
        <div
          className="overlay-rmore fa fa-search quickview"
          data-toggle="modal"
          data-target="#myModal"
        />
        <div className="product-overlay">
          <a href="/" className="addcart fa fa-shopping-cart">
            {}
          </a>
          <a href="/" className="compare fa fa-signal" tool>
            {}
          </a>
          <a href="/" className="likeitem fa fa-heart-o">
            {}
          </a>
        </div>
      </div>
      <div className="product-info">
        <h4 className="product-title">
          <a href="./single-product.html">Product fashion</a>
        </h4>
        <span className="product-price">
          $99.00 <em>- Pre order</em>
        </span>
        <div className="item-colors">
          <a href="/" className="litebrown">
            {}
          </a>
          <a href="/" className="white">
            {}
          </a>
          <a href="/" className="red">
            {}
          </a>
        </div>
      </div>
    </div>
  );
};

export default product;
