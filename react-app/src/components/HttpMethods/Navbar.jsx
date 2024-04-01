import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to = '/'>Home</NavLink> 
        <NavLink to = '/all/customer/'>Customers</NavLink>
        <NavLink to = '/useconstext/compA/'>UseContext</NavLink>
        <NavLink to = '/useconstext/contextwithreducer/'>UseContextwithreducer</NavLink>
    </nav>
  )
}

export default Navbar