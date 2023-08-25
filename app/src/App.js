import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './comps/Navbar';
import { Cart } from './pages/Cart/Cart';
import { Shop } from './pages/Shop/Shop';
import { Login } from './pages/Registration/Login'
import Register from './pages/Registration/Register';

function App() {
  
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </Router>


    </div>
  )
}
export default App;
