import React, { Component } from "react";
import Product from "../../components/Product/Product";
import Modal from "../../components/UI/Modal/Modal";
import ProductDetail from "../../components/Product/ProductDetail/ProductDetail";

import AuxHoc from "../../hoc/AuxHoc";

class ProductList extends Component {
  state = {
    ProductList: [
      {
        key: "p1",
        title: "Product Title 1",
        price: 6.3,
        imgurl:
          "https://ae01.alicdn.com/kf/Haabca4a93f7e456090e42cfe0c9896354/Nordic-Style-PVC-Placemat-Hollow-Non-slip-Insulation-Pads-Hollow-Coaster-Hexagon-Milk-Coffee-Cup-Mats.jpg"
      },
      {
        key: "p2",
        title: "Product Title 2",
        price: 23.79,
        imgurl:
          "https://ae01.alicdn.com/kf/UTB89z2AJgQydeJk43PUq6AyQpXaV/WHISM-Seagrass-Storage-Basket-Flower-Pot-Natural-Rattan-Basket-Plant-Pot-Toys-Holder-Laundry-Basket-Container.jpg"
      },
      {
        key: "p3",
        title: "Product Title 3",
        price: 65.7,
        imgurl:
          "https://ae01.alicdn.com/kf/H1438932fa7e64354a5a57c2160b255deN/Gimfun-Vintage-Silk-Matte-Floral-Phone-Case-for-Iphone-11-Case-Cartoon-Tpu-Case-for-Iphone.jpg"
      }
    ],
    productForModal: null
  };

  render() {
    return (
      <AuxHoc>
        {this.state.productForModal ? (
          <Modal show={this.state.productForModal} closeModal={this.hideModal}>
            <ProductDetail product={this.state.productForModal} />
          </Modal>
        ) : null}
        <h1>Product List</h1>
        {this.state.ProductList.map(p => (
          <Product
            key={p.key}
            productItem={p}
            showDetails={() => this.showModal(p)}
          ></Product>
        ))}
      </AuxHoc>
    );
  }

  showModal = product => {
    this.setState({ productForModal: product });
  };

  hideModal = product => {
    this.setState({ productForModal: null });
  };
}

export default ProductList;
