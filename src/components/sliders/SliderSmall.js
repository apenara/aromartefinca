import React from 'react'

export const SliderSmall = (value) => {

    return (
        
            <div className="slider__container-box">
                <div className="slider__img" style={{
                backgroundImage: `url(${value.imgurl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
                }}
                >

                </div>
                <div className="slider__body">
                    <p className="slider__title-s">{value.actividad}</p>
                    <p className="slider__content">{value.duracion}</p>

                </div>
            
            
            </div>
        
    )
}
