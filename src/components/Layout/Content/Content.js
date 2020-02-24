import React from "react";

import Product from "components/Product/Product";

const content = props => (
  <div className="shop-content">
    <div className="container">
      <div className="row">
        <aside className="col-md-3 col-sm-4">
          <div className="side-widget space50">
            <form role="form" className="search-widget">
              <input className="form-control" type="text" />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          <div className="side-widget">
            <h3>
              <span>Shop by</span>
            </h3>
            <h5>Categories</h5>
            <ul className="cat-list">
              <li>
                <a href="/">New Arrivals</a>
              </li>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Clothing</a>
              </li>
              <li>
                <a href="/">Shoes</a>
              </li>
              <li>
                <a href="/">Handbag</a>
              </li>
              <li>
                <a href="/">Accessories</a>
              </li>
            </ul>
            <div className="clearfix space20" />
            <h5>Price Slider</h5>
            <div id="slider-container" />
            <p>
              <a href="/" className="btn-black pull-left">
                Filter Now
              </a>
              <span className="pull-right sc-range">
                <label className="range-label" htmlFor="amount">
                  Price:
                </label>
                <input
                  type="text"
                  id="amount"
                  style={{ border: 0, color: "#333333", fontWeight: "bold" }}
                />
              </span>
            </p>
            <div className="clearfix space30" />
            <h5>Manufactures</h5>
            <ul className="brand-list">
              <li>
                <a href="/">Amani</a>
              </li>
              <li>
                <a href="/">Just Cavalli</a>
              </li>
              <li>
                <a href="/">D&amp;G</a>
              </li>
              <li>
                <a href="/">Chanel</a>
              </li>
              <li>
                <a href="/">Gucci</a>
              </li>
              <li>
                <a href="/">H&amp;M</a>
              </li>
              <li>
                <a href="/">Louis Vutton</a>
              </li>
            </ul>
            <div className="clearfix space20" />
            <h5>Color Options</h5>
            <ul className="color-list">
              <li>
                <a href="/">
                  <span className="black" />
                  Black
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="darkgrey" />
                  Grey
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="red" />
                  Red
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="liteblue" />
                  Blue
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="yellow" />
                  Yellow
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="brown" />
                  Brown
                </a>
              </li>
            </ul>
            <div className="clearfix space20" />
            <h5>Size Options</h5>
            <ul className="size-list">
              <li>
                <a href="/">XS</a>
              </li>
              <li>
                <a href="/">S</a>
              </li>
              <li>
                <a href="/">M</a>
              </li>
              <li>
                <a href="/">L</a>
              </li>
              <li>
                <a href="/">XL</a>
              </li>
              <li>
                <a href="/">XXL</a>
              </li>
            </ul>
          </div>
          <div className="clearfix space30" />
        </aside>
        <div className="col-md-9 col-sm-8">
          <div className="filter-wrap">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                View as:{" "}
                <span>
                  <a href="/" className="active">
                    Grid
                  </a>{" "}
                  /<a href="/">List</a>
                </span>
              </div>
              <div className="col-md-5 col-sm-5">
                Sort by:
                <select>
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Popular</option>
                  <option>Recently Sold</option>
                </select>
              </div>
              <div className="col-md-4 col-sm-4">
                <span className="pull-right">
                  Show:
                  <select>
                    <option>9 items</option>
                    <option>18 items</option>
                    <option>27 items</option>
                    <option>50 items</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <div className="pagenav-wrap">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                Results: <span>1 - 9 of 86 items</span>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="pull-right">
                  <em>Page:</em>
                  <ul className="page_nav">
                    <li>
                      <a href="/">1</a>
                    </li>
                    <li>
                      <a href="/">2</a>
                    </li>
                    <li>
                      <a href="/">3</a>
                    </li>
                    <li>
                      <a href="/">4</a>
                    </li>
                    <li>
                      <a href="/">5</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="space50" />
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <Product code="4" />
            </div>
            <div className="col-md-4 col-sm-6">
              <Product code="4" />
            </div>
            <div className="col-md-4 col-sm-6">
              <Product code="4" />
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="item-thumb">
                  <img
                    src={require("assets/images/products/fashion/7.jpg")}
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
                    <a href="/" className="compare fa fa-signal">
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
                    <a href="/" className="brown">
                      {}
                    </a>
                    <a href="/" className="litebrown">
                      {}
                    </a>
                    <a href="/" className="red">
                      {}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="item-thumb">
                  <img
                    src={require("assets/images/products/fashion/8.jpg")}
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
                    <a href="/" className="compare fa fa-signal">
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
                    <a href="/" className="liteblue">
                      {}
                    </a>
                    <a href="/" className="white">
                      {}
                    </a>
                    <a href="/" className="litebrown">
                      {}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="item-thumb">
                  <img
                    src={require("assets/images/products/fashion/9.jpg")}
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
                    <a href="/" className="compare fa fa-signal">
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
                    <a href="/" className="brown">
                      {}
                    </a>
                    <a href="/" className="red">
                      {}
                    </a>
                    <a href="/" className="litebrown">
                      {}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="item-thumb">
                  <img
                    src={require("assets/images/products/fashion/10.jpg")}
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
                    <a href="/" className="compare fa fa-signal">
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
                    <a href="/" className="darkgrey">
                      {}
                    </a>
                    <a href="/" className="yellow">
                      {}
                    </a>
                    <a href="/" className="litebrown">
                      {}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="item-thumb">
                  <img
                    src={require("assets/images/products/fashion/11.jpg")}
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
                    <a href="/" className="compare fa fa-signal">
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
                    <a href="/" className="brown">
                      {}
                    </a>
                    <a href="/" className="red">
                      {}
                    </a>
                    <a href="/" className="black">
                      {}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="item-thumb">
                  <img
                    src={require("assets/images/products/fashion/12.jpg")}
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
                    <a href="/" className="compare fa fa-signal">
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
                    <a href="/" className="brown">
                      {}
                    </a>
                    <a href="/" className="litebrown">
                      {}
                    </a>
                    <a href="/" className="cream">
                      {}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagenav-wrap">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                Results: <span>1 - 9 of 86 items</span>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="pull-right">
                  <em>Page:</em>
                  <ul className="page_nav">
                    <li>
                      <a href="/">1</a>
                    </li>
                    <li>
                      <a href="/">2</a>
                    </li>
                    <li>
                      <a href="/">3</a>
                    </li>
                    <li>
                      <a href="/">4</a>
                    </li>
                    <li>
                      <a href="/">5</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space50" />
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="related-posts">
            <h5>Recently Viewed</h5>
            <ul>
              <li>
                <a href="./single-product.html">
                  <img
                    src={require("assets/images/products/fashion/1.jpg")}
                    className="img-responsive"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="./single-product.html">
                  <img
                    src={require("assets/images/products/fashion/2.jpg")}
                    className="img-responsive"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="./single-product.html">
                  <img
                    src={require("assets/images/products/fashion/3.jpg")}
                    className="img-responsive"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="./single-product.html">
                  <img
                    src={require("assets/images/products/fashion/4.jpg")}
                    className="img-responsive"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="./single-product.html">
                  <img
                    src={require("assets/images/products/fashion/5.jpg")}
                    className="img-responsive"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default content;
