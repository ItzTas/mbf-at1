import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Início</li>
          <li className={styles.navItem}>Discussões</li>
          <li className={styles.navItem}>Tutoriais</li>
          <li className={styles.navItem}>FAQ</li>
          <li className={styles.navItem}>Contatos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

