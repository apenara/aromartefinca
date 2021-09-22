import React from 'react'
import { TopNav } from '../static/TopNav'

export const HomeHero = () => {
    return (
        <div className="home__hero-container" >
            <div className="home__hero-elements" >
                <TopNav/>
                <h2 className="home__hero-caption">Una Experiencia mas alla del cafe</h2>
                <div className="home__hero-cta"><p>Reserva</p></div>

            </div>
            
        </div>
    )
}
