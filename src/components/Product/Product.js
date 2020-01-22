import React from "react";
import ProductExtras from "./ProductExtras/ProductExtras";

import classes from "./Product.css";

const product = props => {
  return (
    <div className={classes.Product}>
      <p>Product Component: A Product Item Goes Here</p>
      <ProductExtras type="bread-top" />
      <ProductExtras type="cheese" />
      <ProductExtras type="meat" />
      <ProductExtras type="bread-bottom" />
    </div>
  );
};

export default product;
