import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import E from './Name.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('azan')).render(
  <React.StrictMode>
    {/* <Name /> */}
    E
  </React.StrictMode>,
)
