import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

function BreadCrumbsItem({ path, name }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return isActive
          ? `${styles.nav_link} ${styles.nav_link__active}`
          : `${styles.nav_link}`;
      }}
      end
    >
      {name}
    </NavLink>
  );
}

export default BreadCrumbsItem;
