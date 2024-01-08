import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards name  = "Azan" />
    </>
  )
}

export default App
