import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function CategoryItem({ title, image, id }) {
  return (
    <div>
      <Link to={`/categories/${id}`} className={styles.category}>
        <img
          src={`http://localhost:3333${image}`}
          alt={`category: ${title}`}
          className={styles.category_image}
        />
        <h4 className={styles.category_title}>{title}</h4>
      </Link>
    </div>
  );
}

export default CategoryItem;
