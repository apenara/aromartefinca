import React from 'react'

export const ExploraItems = (exp) => {
    
    return (
        <div className="explora__item-categoria-container">
            <div className="explora__item-large" 
            style={{
                backgroundImage: `url(${exp.imgurl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'}}>
                <div className="explora__item-title">{exp.experiencia}</div>
                <div className="explora__item-text">
                    <p>{exp.duracion}</p>
                    <p>{ exp.descripcion.substring(0,140)} ...</p>
                </div>
                <div className="explora__item-cta">Conocer mas</div>
            </div>


        </div>        
            /* <div className="explora__item-short">
            <div className="explora__item-title">Aventura Valle del Cocora</div>
                <div className="explora__item-circle">

                </div>

            </div> */
    
    )
}
