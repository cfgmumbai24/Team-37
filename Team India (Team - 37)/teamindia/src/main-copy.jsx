import React from 'react'
import ReactDOM from 'react-dom/client'
import Appcopy from './Appcopy.jsx';
import './index.css'
import ShopContextProvider from './pages/buyers/context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <Appcopy />
    </ShopContextProvider>
  </React.StrictMode>,
)
