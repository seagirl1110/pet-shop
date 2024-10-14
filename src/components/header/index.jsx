import styles from './styles.module.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/icons/logo.svg';
import cart from './../../assets/icons/cart.svg';
import { useSelector } from 'react-redux';

const navList = [
  { name: 'Main Page', path: '/' },
  { name: 'Categories', path: '/categories' },
  { name: 'All products', path: '/products' },
  { name: 'All sales', path: '/sale' },
];

function Header() {
  const cartData = useSelector((state) => state.cart.data);
  const cartCount = cartData.reduce((acc, item) => acc + item.count, 0);

  return (
    <header className={styles.header_container}>
      <Link to="/">
        <img src={logo} alt="Pet_shop_logo" />
      </Link>
      <nav className={styles.nav_container}>
        {navList.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              isActive
                ? `${styles.nav_link} ${styles.nav_link__active}`
                : `${styles.nav_link}`
            }
            end
          >
            {name}
          </NavLink>
        ))}
      </nav>
      <Link className={styles.cart} to="/cart">
        <img src={cart} alt="cart" />
        {cartCount !== 0 && (
          <div className={styles.cart_count}>{cartCount}</div>
        )}
      </Link>
    </header>
  );
}

export default Header;
