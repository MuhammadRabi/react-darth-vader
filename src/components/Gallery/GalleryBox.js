import React from "react";
import styles from "./gallery.module.scss";

const GalleryBox = (props) => {
  return (
    <div className={styles.box}>
      <figure>
        <img src={props.img} alt="img" />
      </figure>
    </div>
  );
};

export default GalleryBox;
