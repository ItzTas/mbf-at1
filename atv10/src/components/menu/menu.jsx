import { AccountCircleRounded } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './menu.module.css';
import { useEffect, useState } from 'react';

const options = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'];

function useScreenSize() {
    const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 768);

    useEffect(() => {
        function handleResize() {
            setIsScreenLarge(window.innerWidth > 768);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isScreenLarge;
}

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const isScreenLarge = useScreenSize();

    return (
        <div className={styles.menu}>
            <div className={styles.innerMenu}>
                {isScreenLarge || (
                    <MenuIcon
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                        className={styles.menuIcon}
                        fontSize='inherit'
                    />
                )}
                <h3>Brand</h3>
                {isScreenLarge && (
                    <ul className={styles.options}>
                        {options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                )}
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
