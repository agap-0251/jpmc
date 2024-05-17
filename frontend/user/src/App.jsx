import { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route, NavLink, Link} from "react-router-dom"
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display : "flex",flexDirection : "column"}}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
