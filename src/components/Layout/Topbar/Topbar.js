import React from "react";

//import styles from "./Topbar.module.css";
import flag1 from "assets/images/basic/flag1.png";
import flag2 from "assets/images/basic/flag2.png";
import flag3 from "assets/images/basic/flag3.png";
import AuxHoc from "hoc/AuxHoc";

const topbar = props => (
  <AuxHoc>
    {/* TOPBAR */}
    <div className="top_bar">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="tb_left pull-left">
              <p style={{ fontSize: "32px" }}>Best Finds</p>
            </div>
            <div className="tb_center pull-left">
              <ul>
                <li>
                  <i className="fa fa-phone" />
                </li>
                <li>
                  <i className="fa fa-envelope-o" />{" "}
                  <a href="/">onlinesupport@bestfinds.com</a>
                </li>
              </ul>
            </div>
            <div className="tb_right pull-right">
              <ul>
                <li>
                  <div className="tbr-info">
                    <span>
                      Account <i className="fa fa-caret-down" />
                    </span>
                    <div className="tbr-inner">
                      <a href="my-account.html">My Account</a>
                      <a href="/">My Wishlist</a>
                      <a href="/">Checkout</a>
                      <a href="/">Login</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tbr-info">
                    <span>
                      <img src={flag1} alt="" />
                      &nbsp;English <i className="fa fa-caret-down" />
                    </span>
                    <div className="tbr-inner">
                      <a href="/">
                        <img src={flag1} alt="" />
                        English
                      </a>
                      <a href="/">
                        <img src={flag2} alt="" />
                        French
                      </a>
                      <a href="/">
                        <img src={flag3} alt="" />
                        German
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tbr-info">
                    <span>
                      US Dollar <i className="fa fa-caret-down" />
                    </span>
                    <div className="tbr-inner">
                      <a href="/">€ Euro</a>
                      <a href="/">£ Pound</a>
                      <a href="/">¥ Yen</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* BREADCRUMBS */}
    <div className="bcrumbs">
      <div className="container">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>New Arrivals</li>
        </ul>
      </div>
    </div>
  </AuxHoc>
);

export default topbar;
