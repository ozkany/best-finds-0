import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>
      Nav Item 1
    </NavigationItem>
    <NavigationItem link="/">Nav Item 2</NavigationItem>
    <NavigationItem link="/">Nav Item 3</NavigationItem>
  </ul>
);

export default navigationItems;
