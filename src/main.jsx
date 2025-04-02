import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css';
import Index from './pages/Index.jsx'
import TaskPage from './pages/TaskPage.jsx';
import CounterPage from './pages/CounterPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Index /> */}
    {/* <TaskPage /> */}
    <CounterPage />
  </StrictMode>,
);
