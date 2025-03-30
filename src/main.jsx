import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './pages/Index'
import Todos from './pages/Todos';
import Table from './components/Table/Table';
import AlertButton from './components/buttons/AlertButton';
import MyButton from './components/buttons/MyButton';
import EventObj from './pages/EventObj';
import EventPrepagetion from './components/EventPrepagetion';
import SearchForm from './components/SearchForm';
import SayHelloForm from './components/SayHelloForm';
import Counter from './components/form/Counter';
import Contact from './pages/Contact';
import Task from './components/Task';
import TaskPages from './pages/Task';
import NoteApp from './pages/NoteApp';
import MainTimer from './components/timer/Main';
import MainGuestBook from './components/GuestBook/Main';
import MainProduct from './components/Product/Main';
// import Main from './pages/Main';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Index />
    <Todos />
    <Table />
    <EventObj />
    <EventPrepagetion />
    <SearchForm />
    <SayHelloForm />
    <Counter />
    <Counter />
    <Counter /> */}
    {/* <Contact /> */}
    {/* <TaskPages /> */}
    <NoteApp />
    {/* <Main /> */}

    {/* <AlertButton text="klik saya" message="ini diklik berapa kali" /> */}
    {/* <MainTimer /> */}
    {/* <MainGuestBook /> */}
    {/* <MainProduct /> */}
  </StrictMode>,
);
