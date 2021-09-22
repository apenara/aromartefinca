import React from 'react'


export const SliderBig = (val) => {
    return (
        
        <div className="slider__container-box-big">
            
            <div className="slider__img-big" style={{
                backgroundImage: `url(${val.imgurl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

            </div>
            <div className="slider__body">
                <p className="slider__title-b">{val.nombre}</p>
            </div>
        </div>
    )
}
