import { AccountCircleRounded } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './menu.module.css';
import { useState } from 'react';

const options = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <div className={styles.innerMenu}>
        <MenuIcon
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={styles.menuIcon}
          fontSize='inherit'
        />
        <h3>Brand</h3>
        <AccountCircleRounded fontSize='inherit' />
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
