import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from './pages/HelloWorld';
import './assets/App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
