import React from 'react'

export const HabitacionesDisplay = (val) => {
    return (
        <div className="habitaciones__display-container">
            <div className={val.lado}>
                <div className="habitaciones__display-info">
                    <h2 className="habitaciones__diplay-info-title">{val.nombre}</h2>
                    <p className="habitaciones__displiay-info-description">{val.descripcion}</p>
                    <div className="habitaciones__display-info-boton">conocer mas</div>
                </div>
                <div className="habitaciones__display-img" style={{
                backgroundImage: `url(${val.imgurl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                </div>

            </div>
            {/* <div className="habitaciones__display-right-container">
                <div className="habitaciones__display-img">

                </div>
                <div className="habitaciones__display-info">

                </div>

            </div> */}
            
        </div>
    )
}
