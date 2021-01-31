import React, {useState} from "react"
import { NavLink } from 'react-router-dom'
import ToggleNav from './toggle_nav/ToggleNav'
import "./NavBar.sass"

const NavBar = () => {

    const [ isNavBarCollapsed, setIsNavBarCollapsed ] = useState(true);

    const toggleNavbar = () => setIsNavBarCollapsed( isNavBarCollapsed => !isNavBarCollapsed )

    return (
        <div className="navbar">
            <ToggleNav 
                active={!isNavBarCollapsed} 
                toggle={toggleNavbar}
            />
            <NavLink className="navbar__logo" exact to="/home">
                <img alt="Logo" />
            </NavLink>
            <nav data-testid="navbar-nav" className={ isNavBarCollapsed ? " navbar__nav--collapsed" : "navbar__nav" }>
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