import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./ProductExtras.css";

class ProductExtras extends Component {
  render() {
    let extra = null;

    switch (this.props.type) {
      case "bread-bottom":
        extra = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        extra = <div className={classes.Seeds1} />;
        break;
      default:
        extra = null;
    }

    return extra;
  }
}

ProductExtras.propTypes = {
  type: PropTypes.string.isRequired
};

export default ProductExtras;
