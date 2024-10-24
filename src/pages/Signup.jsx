import { Link } from "react-router-dom";
import styles from "./login.module.css";

const Signup = () => {
  return (
    <div className={styles.LoginContainer}>
      <form className={styles.loginFormContainer}>
        <h1>User Signup</h1>
        <div>
          <i className="fa-solid fa-user" />
          <input type="text" placeholder="Enter your name here" />
        </div>
        <div>
          <i className="fa-solid fa-user" />
          <input type="text" placeholder="Enter username here" />
        </div>
        <div>
          <i className="fa-solid fa-lock" />
          <input type="text" placeholder="Enter your password here" />
        </div>
        <p className={styles.links}>
          <Link to="/">Signup</Link>
        </p>
        <p className={styles.askToSignUp}>
          Already have an account?
          <Link to="/login" className={styles.signup}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
