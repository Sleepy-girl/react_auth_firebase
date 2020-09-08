import React from "react";
import Navigation from "./navigation/Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Navigation />
    </div>
  );
};

export default Header;
