import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
// import Navbar from './components/Navbar'
import Login from './components/Login'
import About from './components/About'
import Singup from './components/Singup'
// import ForgotPassword from './components/Forgotpassword'
import ResetPassword from './components/ResetPassword'
import Dashboard from './components/Dashboard'
import Logout from './components/Logout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {' '}
        </Route>
        <Route path="/about" element={<About />}>
          {' '}
        </Route>
        <Route path="/login" element={<Login />}>
          {' '}
        </Route>
        <Route path="/signup" element={<Singup />}>
          {' '}
        </Route>
        {/* <Route path="/forgotPassword" element={<ForgotPassword />}>
          {' '}
        </Route> */}
        <Route path="/resetPassword/:token" element={<ResetPassword />}>
          {' '}
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          {' '}
        </Route>
        <Route path="/logout" element={<Logout />}>
          {' '}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
