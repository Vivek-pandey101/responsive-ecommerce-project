import { Link } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.ErrorContainer}>
      <div>
        <h1>404</h1>
        <span>Oops! nothing was found</span>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable{" "}
          <Link to="/">Return to homepage</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Error;
