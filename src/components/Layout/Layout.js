import React from "react";

import AuxHoc from "../../hoc/AuxHoc";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <AuxHoc>
    <Toolbar />
    <SideDrawer />
    <main className={styles.Content}>{props.children}</main>
  </AuxHoc>
);

export default layout;
