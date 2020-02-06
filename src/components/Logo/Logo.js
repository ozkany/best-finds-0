import React from "react";
import styles from "./Logo.module.css";

import burgerLogo from "../../assets/images/logo.png";

const logo = () => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="Best Finds" />
  </div>
);

export default logo;
