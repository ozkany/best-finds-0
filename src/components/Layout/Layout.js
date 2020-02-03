import React from "react";

import AuxHoc from "../../hoc/AuxHoc";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <AuxHoc>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </AuxHoc>
);

export default layout;
