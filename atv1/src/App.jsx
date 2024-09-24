import './App.css';
import { IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function App() {
    return (
        <div className='app'>
            <header>
                <img
                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B-GtznvQ82H9zcQO7FQs2QHaE8%26pid%3DApi%26h%3D160&f=1&ipt=af275e664782227e408f78cc7eb83e3efe156f9b8e039e779bd2f1988175e0c7&ipo=images'
                    className='logo'
                />
                <h1>My Website</h1>
            </header>
            <ul>
                <li>Sobre mim</li>
                <li>Feedback</li>
                <li>Biografia</li>
            </ul>
            <IconButton>
                <AccountCircle />
            </IconButton>
        </div>
    );
}

export default App;
