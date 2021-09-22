import React from 'react'
import aventura from '../../assets/icons/servicios/senderismo.svg'
import senderismo from '../../assets/icons/servicios/senderismo.svg'
import paisaje from '../../assets/icons/servicios/senderismo.svg'
import cultura from '../../assets/icons/servicios/boleta.svg'

export const SliderCategorias = () => {
    return (
        <div className="slider__container-prebox-categorias">
            <div className="slider__container-box-categorias">
                <img src={aventura} className="slider__img-mid" alt="categoria"/>
                <div className="slider__body">
                    <p className="slider__titel">Aventura</p>
                </div>
            </div>
            <div className="slider__container-box-categorias">
                <img src={paisaje} className="slider__img-mid" alt="categoria"/>
                <div className="slider__body">
                    <p className="slider__titel">Paisaje</p>
                </div>
            </div>
            <div className="slider__container-box-categorias">
                <img src={senderismo} className="slider__img-mid" alt="categoria"/>
                <div className="slider__body">
                    <p className="slider__titel">Senderismo</p>
                </div>
            </div>
            <div className="slider__container-box-categorias">
                <img src={cultura} className="slider__img-mid" alt="categoria"/>
                <div className="slider__body">
                    <p className="slider__titel">Cultural</p>
                </div>
            </div>
            

        </div>
    )
}
