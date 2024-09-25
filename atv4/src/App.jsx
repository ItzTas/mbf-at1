import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>Header</header>
            <nav className={styles.gMenu}>Global Menu</nav>
            <aside className={styles.ads}>Ads</aside>
            <aside className={styles.cMenu}>Context Menu</aside>
            <main className={styles.mContent}>Main Content</main>
            <footer className={styles.footer}>Footer</footer>
        </div>
    );
}

export default App;
