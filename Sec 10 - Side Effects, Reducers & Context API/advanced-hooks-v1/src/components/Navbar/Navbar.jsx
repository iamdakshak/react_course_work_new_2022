import React from "react";

// import Navigation from "./Navigation";
import styles from "./Navbar.module.css";

const MainHeader = (props) => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.companyLogo}>Company</div>
        <div className={styles.navbarItems}>
          <div className={styles.navbarLinks}>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Support</li>
          </div>
          {/*<Link to="/">Home</Link>
          <Link to="/">About</Link>
  <Link to="/">Contact Us</Link>*/}
          {/* <Link></Link> */}
          <div className={styles.search}>
            <span class="iconify" data-icon="bytesize:search"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
