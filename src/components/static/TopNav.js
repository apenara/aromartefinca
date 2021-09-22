import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logoAlpha.png'
export const TopNav = () => {
    return (
        <div className="home__hero-elements-menu">
                <Link to="/"><img src={logo} alt="Finca Hotel Aromarte" className="home__hero-logo"></img></Link>
                <ul className="home__hero-ul">
                    <li><Link to="/explora">Experiencias Aromarte</Link></li>
                    <li><Link to="/habitaciones">Habitaciones</Link></li>
                    <li><Link to="/explora">Reservas</Link></li>
                    <li><Link to="/explora">Contacto</Link></li>
                </ul>

                </div>
    )
}
