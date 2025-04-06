import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css';
import { RouterData, RouterDeclarative } from './Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterDeclarative />
    {/* <RouterData /> */}
  </StrictMode>
);