import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/App.css';
import Index from './pages/Index.jsx'
import TaskPage from './pages/TaskPage.jsx';
import CounterPage from './pages/CounterPage.jsx';
import NotePages from './pages/NotePages.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import AlertButton2 from './components/button/AlertButton2.jsx';
import Timer from './components/timer/Timer.jsx';
import GuestBook from './components/guestBook/GuestBook.jsx';
import ProductList from './components/product/ProductList.jsx';
import Online from './components/online/Online.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Index /> */}
    {/* <TaskPage /> */}
    {/* <CounterPage /> */}
    {/* <NotePages /> */}
    {/* <ProfilePage /> */}
    {/* <AlertButton2 /> */}
    {/* <Timer /> */}
    {/* <GuestBook /> */}
    {/* <ProductList /> */}
    <Online />
  </StrictMode>,
);
