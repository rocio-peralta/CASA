import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import About from './components/About'

function App() {
  return (
  <BrowserRouter>
  <Navbar />
   <Routes> 
     <Route path = '/' element={<Home />}> </Route>
     <Route path = '/about' element={<About />}> </Route>  
     <Route path = '/login' element={<Login />}> </Route>
   </Routes>
  </BrowserRouter>
  )
}

export default App
