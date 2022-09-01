import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
// import Navbar from "../Navbar/Navbar";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      {/* <Navbar /> */}
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
