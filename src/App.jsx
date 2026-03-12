import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/home/Home.jsx'
import Auth from './pages/auth/Auth.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
