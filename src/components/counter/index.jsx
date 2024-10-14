import styles from './styles.module.css';
import btnPlus from './../../assets/icons/counter_plus.svg';
import btnMinus from './../../assets/icons/counter_minus.svg';

function Counter({ count, plus, minus }) {
  return (
    <div className={styles.counter_wrapper}>
      <button
        className={
          count === 1
            ? `${styles.counter_btn} ${styles.counter_btn__no_active} `
            : styles.counter_btn
        }
        onClick={minus}
      >
        <img src={btnMinus} alt="minus" />
      </button>
      <div className={styles.counter_count}>{count}</div>
      <button className={styles.counter_btn} onClick={plus}>
        <img src={btnPlus} alt="plus" />
      </button>
    </div>
  );
}

export default Counter;
