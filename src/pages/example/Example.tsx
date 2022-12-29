import { useContext } from "react";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import { CounterContext } from "context/counter/CounterContext";
import { Link } from "react-router-dom";
import Button from "components/Button";
import styles from "./styles.module.css";

const ExamplePage = () => {
  const { counterState, addition, subtraction } = useContext(CounterContext);
  const { total } = counterState;
  
  return (
    <AppLayout>
      <Headline title="Example" />
      <section className={styles.section}>
        <h2>Context example:</h2>
        <p>Total: {total}</p>
        <Button onClick={subtraction}>-</Button>{" "}
        <Button onClick={addition}>+</Button>
      </section>
      <section className={styles.section}>
        <h2>Cart page example:</h2>
        <span>Click to see </span>{" "}
        <Link to="/cart">
          <button> Cart Page</button>
        </Link>
      </section>
    </AppLayout>
  );
};

export default ExamplePage;
