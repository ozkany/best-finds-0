import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./ProductExtras.module.css";

class ProductExtras extends Component {
  render() {
    let extra = null;

    switch (this.props.type) {
      case "bread-bottom":
        extra = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        extra = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        extra = <div className={classes.Meat} />;
        break;
      case "cheese":
        extra = <div className={classes.Cheese} />;
        break;
      case "bacon":
        extra = <div className={classes.Bacon} />;
        break;
      case "salad":
        extra = <div className={classes.Salad} />;
        break;
      default:
        extra = null;
        break;
    }

    return extra;
  }
}

ProductExtras.propTypes = {
  type: PropTypes.string.isRequired
};

export default ProductExtras;
