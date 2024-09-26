import { useEffect, useState } from 'react';
import styles from './App.module.css';
import MenuIcon from '@mui/icons-material/Menu';

const options = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'];

function App() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
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
                <>
                    <div className={styles.wrapper}>
                        <header className={styles.header}>Header</header>
                        <nav className={styles.gMenu}>
                            <MenuIcon
                                onClick={() => {
                                    setIsOpenMenu(!isOpenMenu);
                                }}
                                className={styles.menuIcon}
                                fontSize='large'
                            />
                            <span className={styles.gMenuText}>Global Menu</span>
                        </nav>
                    </div>
                    {isOpenMenu && (
                        <ul className={styles.options}>
                            {options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <>
                    <header className={styles.header}>Header</header>
                    <nav className={styles.gMenu}>
                        {
                            <ul className={styles.options}>
                                {options.map((option, index) => (
                                    <li key={index}>{option}</li>
                                ))}
                            </ul>
                        }
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
