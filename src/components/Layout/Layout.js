import React from "react";

import AuxHoc from "../../hoc/AuxHoc";
import styles from "./Layout.module.css";

const layout = props => (
  <AuxHoc>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </AuxHoc>
);

export default layout;
