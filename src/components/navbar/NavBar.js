import React from "react"
import { NavLink } from 'react-router-dom'
import "./NavBar.sass"

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink className="navbar__logo" exact to="/home">
                <img alt="Logo" />
            </NavLink>
            <nav className="navbar__nav">
                <NavLink className="navbar__link" exact to="/home">Inicio</NavLink>
                <NavLink className="navbar__link" exact to="/aboutme">Sobre mi</NavLink>
                <NavLink className="navbar__link" exact to="/massages">Masajes</NavLink>
                <NavLink className="navbar__link" exact to="/prices">Tarifas</NavLink>
                <NavLink className="navbar__link" exact to="/offer">Oferta</NavLink>
                <NavLink className="navbar__link" exact to="/contact">Contacto</NavLink>
            </nav>
        </div>
    )
}

export default NavBar