import React from "react"
import { NavLink } from 'react-router-dom'
import "./NavBar.sass"

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink className="navbar__link" exact to="/home">Inicio</NavLink>
            <NavLink className="navbar__link" exact to="/aboutme">Sobre mi</NavLink>
            <NavLink className="navbar__link" exact to="/massages">Masajes</NavLink>
            <NavLink className="navbar__link" exact to="/prices">Tarifas</NavLink>
            <NavLink className="navbar__link" exact to="/offer">Oferta</NavLink>
            <NavLink className="navbar__link" exact to="/contact">Contacto</NavLink>
        </nav>
    )
}

export default NavBar