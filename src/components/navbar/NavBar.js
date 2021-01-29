import React from "react"
import { NavLink } from 'react-router-dom'
import "./NavBar.sass"

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink className="navbar__link" exact to="/home">Inicio</NavLink>
        </nav>
    )
}

export default NavBar