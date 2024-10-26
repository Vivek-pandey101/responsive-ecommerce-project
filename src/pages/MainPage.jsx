import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.MainContainer}>
      <div>
        <h1>Shopping Cart</h1>
        <p>Enjoy shopping and <br/>get anything you want</p>
      </div>
      <Link to="/about" className={styles.learnMore}>Learn More</Link>
    </div>
  );
}

export default MainPage;
