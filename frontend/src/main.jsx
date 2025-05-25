import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //importing the BrowserRouter component from react-router-dom
import './css/index.css' //importing the index.css file
import App from './App.jsx' //where our main app component is located

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> <App /> </BrowserRouter>
  </StrictMode>,
)
