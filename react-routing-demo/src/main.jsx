import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterStore from './contexts/CounterStore.jsx';
import UserStore from './contexts/UserStore.jsx';

createRoot(document.getElementById('root')).render(


  <CounterStore>
    <UserStore>
      <App />
    </UserStore>
  </CounterStore>
)
