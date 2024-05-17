import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import MainContainer from './components/MainContainer'

function App() {

  return (
    <div className='text-white min-h-full'>
      <Router>
        <Routes>
          <Route path='/' element={ <MainContainer children={<LandingPage /> } />} />
          <Route path='/home' element={ <MainContainer children={<Home /> } />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
