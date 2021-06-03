import React from 'react';
import styles from './button.module.css';

import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
  delete: DeleteIcon,
};

const Button = ({ icon, onClick }) => {
  const Icon = icons[icon];
  return (
    <button className={styles.button} onClick={onClick}>
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
