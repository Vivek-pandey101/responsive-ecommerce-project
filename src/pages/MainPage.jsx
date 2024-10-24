import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.MainContainer}>
      <div>
        <h1>Shopping Cart</h1>
        <p>Enjoy shopping and <br/>get anything you want</p>
      </div>
      <button>Learn More</button>
    </div>
  );
}

export default MainPage;
