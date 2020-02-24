import React from "react";

import AuxHoc from "../../hoc/AuxHoc";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Topbar from "components/Layout/Topbar/Topbar";
import Content from "components/Layout/Content/Content";

const layout = props => (
  <AuxHoc>
    <Topbar />
    <Content />
    <Toolbar />
    <SideDrawer />
    <main className={styles.Content}>{props.children}</main>
  </AuxHoc>
);

export default layout;
