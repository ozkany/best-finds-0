import React, { Component } from "react";
import Product from "../../components/Product/Product";

import AuxHoc from "../../hoc/AuxHoc";

class ProductList extends Component {
  state = {
    title: "",
    price: 0,
    image:
      "https://ae01.alicdn.com/kf/Haabca4a93f7e456090e42cfe0c9896354/Nordic-Style-PVC-Placemat-Hollow-Non-slip-Insulation-Pads-Hollow-Coaster-Hexagon-Milk-Coffee-Cup-Mats.jpg"
  };

  render() {
    return (
      <AuxHoc>
        <div>Products Component</div>
        <div>Some other controls in Products Component</div>

        <Product />
      </AuxHoc>
    );
  }
}

export default ProductList;
