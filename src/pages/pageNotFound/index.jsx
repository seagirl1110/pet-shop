import styles from './styles.module.css';
import img404 from './../../assets/image/404.png';
import Button from './../../components/button';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className={styles.main_container}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={img404} alt="404" />
        <div className={styles.content}>
          <p className={styles.title}>Page Not Found</p>
          <p className={styles.text}>
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
        </div>
        <Link to="/">
          <Button name="Go Home" />
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
