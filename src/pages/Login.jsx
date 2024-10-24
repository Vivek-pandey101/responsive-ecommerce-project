import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);

  const hndleShow = () => {
    setShow(!show);
  };

  return (
    <div className={styles.LoginContainer}>
      <form className={styles.loginFormContainer}>
        <h1>User Login</h1>
        <div>
          <i className="fa-solid fa-user" />
          <input type="text" placeholder="Enter username here" />
        </div>
        <div>
          <i className="fa-solid fa-lock" />
          <input
            type={show ? "text" : "password"}
            placeholder="Enter your password here"
          />
          <button onClick={() => hndleShow()}>
            {show ? (
              <i className="fa-solid fa-eye" />
            ) : (
              <i className="fa-solid fa-eye-slash" />
            )}
          </button>
        </div>
        <p>
          <Link to="/">Login</Link>
          <Link to="/">Forget Username/Password?</Link>
        </p>
        <p className={styles.askToSignUp}>
          Do not have an account?
          <Link to="/signup" className={styles.signup}>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
