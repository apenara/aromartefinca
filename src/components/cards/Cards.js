import React from 'react'
import colibri from '../../assets/card/colibri.webp'

export const Cards = () => {
    return (
        <div className="card__main-container">
            <div className="card__container" style={{
            backgroundImage: `url(${colibri})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'}}>

            

                <div className="card__elements-container">
                    <h3 className="card__element-title">Experiencias cerca de ti</h3>
                    <p className="card__element-caption">Diseñamos una guia especial que enriquecera tu estadia en nuestro hotel</p>
                    <div className="home__hero-cta">Conocer Guia</div>

                </div>
            

            </div>
            
        </div>
    )
}
