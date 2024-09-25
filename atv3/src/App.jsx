import { useState } from 'react';
import styles from './App.module.css';
import { Button } from '@mui/material';

const imgElement = <img src='https://placehold.co/150' />;

function App() {
    const [numImages, setNumImages] = useState(3);

    function renderImages() {
        let imgs = [];
        for (let i = 0; i < numImages; i++) {
            imgs.push(imgElement);
        }
        return imgs;
    }
    return (
        <div>
            <div className={styles.buttons}>
                <Button
                    onClick={() => {
                        setNumImages(numImages + 1);
                    }}
                    variant='contained'
                >
                    +
                </Button>
                <span>{numImages}</span>
                <Button
                    onClick={() => {
                        if (numImages <= 0) {
                            return;
                        }
                        setNumImages(numImages - 1);
                    }}
                    variant='contained'
                >
                    -
                </Button>
            </div>
            <div className={styles.images}>{renderImages()}</div>
        </div>
    );
}

export default App;
