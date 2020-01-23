import React from "react";

import AuxHoc from "../../../hoc/AuxHoc";

const productDetail = props => {
  const productSummary = Object.keys(props.product).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span> ->{" "}
        {props.product[key]}
      </li>
    );
  });
  return (
    <AuxHoc>
      <h3>Product Detail</h3>
      <ul>{productSummary}</ul>
    </AuxHoc>
  );
};

export default productDetail;
