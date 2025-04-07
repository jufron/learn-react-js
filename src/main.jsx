import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css';
import { RouterData } from './Routes';
import RouterDeclarative from './routes/RouteDeclarative';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterDeclarative />
    {/* <RouterData /> */}
  </StrictMode>
);