import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={styles.NavbarContainer}>
        <h2>Ecommerce.site</h2>
        <i
          className="fa-solid fa-bars"
          id={styles.menuIcon}
          onClick={() => handleClick()}
        ></i>
        <div className={styles.Navbarlinks}>
          <Link to="/"><i className="fa-solid fa-house"></i>Home</Link>
          <Link to="/product"><i className="fa-solid fa-store"></i>Product</Link>
          <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>Cart</Link>
          <Link to="/login"><i className="fa-solid fa-user"></i>Login</Link>
        </div>
      </div>
      {show && (
        <div className={styles.SideBar}>
          <div className={styles.overlay} onClick={() => handleClick()}></div>
          <div className={styles.SideNavbarContainer}>
            <div className={styles.SideNavbarlinks}>
              <button className={styles.closeBtn} onClick={() => handleClick()}><i className="fa-solid fa-x"></i></button>
              <Link onClick={() => handleClick()} to="/">
              <i className="fa-solid fa-house"></i> Home
              </Link>
              <Link onClick={() => handleClick()} to="/product">
              <i className="fa-solid fa-store"></i>Product
              </Link>
              <Link to="/cart" onClick={() => handleClick()}><i className="fa-solid fa-cart-shopping"></i>Cart</Link>
              <Link to="/login" onClick={() => handleClick()}><i className="fa-solid fa-user"></i>Login</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
