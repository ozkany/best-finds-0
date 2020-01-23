import React from "react";
import AuxHoc from "../../../hoc/AuxHoc";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const modal = props => (
  <AuxHoc>
    <Backdrop show={props.show} clicked={props.closeModal} />
    <div className={styles.Modal}>{props.children}</div>
  </AuxHoc>
);

export default modal;
