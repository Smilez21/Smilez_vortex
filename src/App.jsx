import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LandingPage from './components/LandingPage';
import VirtualMentor from './pages/VirtualMentor';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div className="overflow-x-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<VirtualMentor />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
