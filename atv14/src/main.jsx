import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ForumPage from './components/forum_page/forum_page';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ForumPage />
    </StrictMode>,
);
