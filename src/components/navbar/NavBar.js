import React, { useState } from "react"
import { Link } from 'react-scroll'
import ToggleNav from './toggle_nav/ToggleNav'
import "./NavBar.sass"

const NavBar = () => {

    const [isNavBarCollapsed, setIsNavBarCollapsed] = useState(true);

    const toggleNavbar = () => setIsNavBarCollapsed(isNavBarCollapsed => !isNavBarCollapsed)

    const navBarScrollConfig = {
        spy: true,
        smooth: true,
        duration: 500,
        offset: -80
    }

    const {spy, smooth, duration, offset} = navBarScrollConfig
    return (
        <nav className="navbar">
            <ToggleNav
                active={!isNavBarCollapsed}
                toggle={toggleNavbar}
            />
            <Link
                className="navbar__logo"
                activeClass="navbar__logo--active"
                to="header"
                spy={spy}
                smooth={smooth}
                duration={duration}
            >
                <img alt="Logo" />
            </Link >
            <ul data-testid="navbar-nav" className={isNavBarCollapsed ? " navbar__nav--collapsed" : "navbar__nav"}>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar__link--active"
                        to="header"
                        spy={spy}
                        smooth={smooth}
                        duration={duration}
                    >
                        Inicio
                    </Link >
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar__link--active"
                        to="aboutme"
                        spy={spy}
                        smooth={smooth}
                        duration={duration}
                        offset={offset}
                    >
                        Sobre mi
                    </Link >
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar__link--active"
                        to="massages"
                        spy={spy}
                        smooth={smooth}
                        duration={duration}
                        offset={offset}
                    >
                        Masajes
                    </Link >
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar__link--active"
                        to="offer"
                        spy={spy}
                        smooth={smooth}
                        duration={duration}
                        offset={offset}
                    >
                        Ofertas
                    </Link >
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar__link--active"
                        to="products"
                        spy={spy}
                        smooth={smooth}
                        duration={duration}
                        offset={offset}
                    >
                        Tarifas
                    </Link >
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar__link--active"
                        to="testimonials"
                        spy={spy}
                        smooth={smooth}
                        duration={duration}
                        offset={offset}
                    >
                        Testimonios
                    </Link >
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar__link--active"
                        to="contact"
                        spy={spy}
                        smooth={smooth}
                        duration={duration}
                        offset={offset}
                    >
                        Contacto
                    </Link >
                </li>
            </ul>
        </nav>
    )
}

export default NavBar