import { Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingDiv}>
      <Spinner className={styles.loadingSpinner} />
    </div>
  );
};

export default Loading;
