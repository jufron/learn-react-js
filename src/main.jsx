import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './pages'
import Controlled from './pages/Controlled'

createRoot(document.getElementById('root')).render(
  <>
    {/* <Index /> */}
    <Controlled />
  </>
)