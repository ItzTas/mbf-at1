import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.app}>
            {isMobile ? (
                <div className={styles.wrapper}>
                    <header className={styles.header}>Header</header>
                    <nav className={styles.gMenu}>
                        <span className={styles.gMenuText}>Global Menu</span>
                    </nav>
                </div>
            ) : (
                <>
                    <header className={styles.header}>Header</header>
                    <nav className={styles.gMenu}>
                        <span className={styles.gMenuText}>Global Menu</span>
                    </nav>
                </>
            )}
            <aside className={styles.ads}>Ads</aside>
            <aside className={styles.cMenu}>Context Menu</aside>
            <main className={styles.mContent}>Main Content</main>
            <footer className={styles.footer}>Footer</footer>
        </div>
    );
}

export default App;
