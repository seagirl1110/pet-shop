import CategoryList from '../../components/categoryList';
import styles from './styles.module.css';

function Main() {
  return (
    <main className={styles.main_container}>
      <div className={styles.banner}>
        <h1 className={styles.title}>Amazing Discounts on Pets Products!</h1>
        <button className={styles.banner_btn}>Check out</button>
      </div>
      <CategoryList page={'main'} />
    </main>
  );
}

export default Main;
