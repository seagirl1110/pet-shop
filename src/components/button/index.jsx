import React from 'react';
import styles from './styles.module.css';
import cn from 'classnames';

function Button({ name, onClick, isActive, type = 'primary' }) {
  const className = cn({
    [styles.btn]: true,
    [styles.btn__active]: isActive,
    [styles[`btn__${type}`]]: type,
  });

  return (
    <button onClick={onClick} className={className}>
      {name}
    </button>
  );
}

export default Button;
