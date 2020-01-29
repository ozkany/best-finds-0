import React, { Component } from "react";
// import PropTypes from "prop-types";
import Button from "../../UI/Button/Button";

import styles from "./ProductExtras.module.css";

class ProductExtras extends Component {
  render() {
    return (
      <div className={styles.ProductExtras}>
        <span># Likes</span>
        <button onClick={this.props.likeProduct}>Like</button>
        <Button btnType="Success" clicked={this.props.addClicked}>
          Add
        </Button>
        <span>Found By ...</span>
      </div>
    );
  }
}

// ProductExtras.propTypes = {
//   type: PropTypes.string.isRequired
// };

export default ProductExtras;
