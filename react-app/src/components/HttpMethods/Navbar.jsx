import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to = '/'>Home</NavLink> 
        <NavLink to = '/all/customer/'>Customers</NavLink>
    </nav>
  )
}

export default Navbar