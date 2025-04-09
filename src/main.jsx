import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css';
import { RouterData } from './Routes';
import RouterDeclarative from './routes/RouteDeclarative';
import { RouterProvider } from 'react-router';
import router from './routes/RouteData';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterDeclarative /> */}
    {/* <RouterData /> */}
    
    <RouterProvider router={router} />
  </StrictMode>
);