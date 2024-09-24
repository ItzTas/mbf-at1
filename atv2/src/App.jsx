import './App.css';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
    return (
        <div className='app'>
            <header>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B-GtznvQ82H9zcQO7FQs2QHaE8%26pid%3DApi%26h%3D160&f=1&ipt=af275e664782227e408f78cc7eb83e3efe156f9b8e039e779bd2f1988175e0c7&ipo=images' />
                <h1>My Website</h1>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </header>
            <ul>
                <li>Sobre mim</li>
                <li>Feedback</li>
                <li>Biografia</li>
                <li>Interesses</li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Conexões</li>
                <li>Histórico de Atividades</li>
                <li>Configurações de Conta</li>
            </ul>
        </div>
    );
}

export default App;
