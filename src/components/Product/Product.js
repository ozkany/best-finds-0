import React from "react";
import ProductExtras from "./ProductExtras/ProductExtras";

import styles from "./Product.module.css";

const product = props => {
  return (
    <div className={styles.Product}>
      <h3>Product Component: A Product Item Goes Here</h3>
      <h4>{props.productItem.title}</h4>
      <h5>{props.productItem.price} TL</h5>
      <img src={props.productItem.imgurl} alt={props.productItem.title} />
      <ProductExtras
        product={props.productItem}
        likeProduct={() => likeProduct(props.productItem.key)}
      />
      <button className={styles.DetailsButton} onClick={props.showDetails}>
        DETAILS
      </button>
    </div>
  );
};

const likeProduct = p => {
  console.log(`product ${p} is liked`);
};

export default product;
