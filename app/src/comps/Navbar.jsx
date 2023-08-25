import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@phosphor-icons/react'

import './Navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/">shop</Link>
        <Link to="/cart"><ShoppingCart size={32}/></Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>


      </div>
      
     
    </div>
  )
}
