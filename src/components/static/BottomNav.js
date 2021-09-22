import React from 'react'
import { Link } from 'react-router-dom'
import  booknow   from "../../assets/icons/booknow.svg"
import  explore  from "../../assets/icons/explore.svg"
import  habitaciones  from "../../assets/icons/habitaciones.svg"

export const BottomNav = () => {
    return (
        <div>
            <nav className="nav__container">
                <div className="nav__elements">
                    <Link className="nav__element" to="/habitaciones">
                        <div className="nav__icon">
                            <img src={habitaciones} alt="habitaciones"/>
                        </div>
                        <div className="nav__headers">
                            <p>Habitaciones</p>
                        </div>
                    </Link>
                    <Link className="nav__element" to="/">
                        <div className="nav__icon">
                            <img src={booknow} alt="Reservar"/>
                        </div>
                        <div className="nav__headers">
                            <p>Reservar</p>
                        </div>
                    </Link>
                    <Link className="nav__element" to="/explora">
                        <div className="nav__icon">
                            <img src={explore} alt="explora"/>
                        </div>
                        <div className="nav__headers">
                            <p>Explora</p>
                        </div>
                    </Link>

                </div>

            </nav>
        </div>
    )
}
