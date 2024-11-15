import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp.jsx';
import './styles/style.css';
import './styles/reset.css';

createRoot(document.getElementById('root')).render(
    <ContactApp />
);