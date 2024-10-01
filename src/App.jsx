import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Aboutme } from './components/Aboutme'
import { Projects } from './components/Projects'
import Contactme from './components/Contactme'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Projects/>
      <Contactme />
    </div>
  )
}

export default App
