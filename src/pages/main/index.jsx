import styles from './styles.module.css';

function Main() {
  return (
    <main>
      <div className={styles.banner}>
        <h1 className={styles.title}>Amazing Discounts on Pets Products!</h1>
        <button className={styles.banner_btn}>Check out</button>
      </div>
    </main>
  );
}

export default Main;
