import styles from './styles.module.css';
import BreadCrumbsItem from '../breadCrumbsItem';

function BreadCrumbsList({ list }) {
  return (
    <div className={styles.nav_wrapper}>
      {list.map((item, index) => (
        <div className={styles.nav_inner} key={index}>
          <BreadCrumbsItem {...item} />
          {index !== list.length - 1 && (
            <div className={styles.nav_separator} />
          )}
        </div>
      ))}
    </div>
  );
}

export default BreadCrumbsList;
