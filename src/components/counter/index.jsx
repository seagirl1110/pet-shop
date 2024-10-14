import styles from './styles.module.css';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div className={styles.counter_wrapper}>
      <button
        className={
          count === 1
            ? `${styles.counter_btn} ${styles.counter_btn__no_active} `
            : styles.counter_btn
        }
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <div className={styles.counter_count}>{count}</div>
      <button
        className={styles.counter_btn}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
