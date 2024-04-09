import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {

    return (

        <nav>

            <li>
                
                <NavLink to = {'/'}>Home</NavLink>

            </li>

            <li>

                <NavLink to = {'/allcomponents/'}>Normal Renderings</NavLink>

            </li>

            <li>

                <NavLink to = {'/customer/add/'}>Customers</NavLink>

            </li>


        </nav>
        
    )
}

export default NavBar