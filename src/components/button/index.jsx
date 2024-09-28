import styles from './styles.module.css';
import { useEffect, useState } from 'react';

function Button({ name, defaultStyles, hoverStyles }) {
  const [isHover, setIsHover] = useState(false);
  const [btnStyles, setBtnStyles] = useState(defaultStyles);

  useEffect(() => {
    if (isHover) {
      setBtnStyles(hoverStyles);
    } else {
      setBtnStyles(defaultStyles);
    }
  }, [isHover]);

  return (
    <button
      className={styles.btn}
      style={btnStyles}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {name}
    </button>
  );
}

export default Button;
