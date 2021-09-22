import React from 'react'
import { SliderBig } from '../sliders/SliderBig'
import { habitaciones } from '../../data/habitaciones'


export const SectionTwo = () => {
    
    // const habitaciones = [1,2,3,4,5,6,7];
    
    return (

        <div className="section__container">
            <h2 className="section__title">Descubre nuestras habitaciones</h2>
            <div className="section__slider-container-big">
                {
                    habitaciones.map( val=>(
                    <SliderBig key={val.id} nombre={val.nombre} acomodacion={val.acomodacion} imgurl={val.imgurl}/>
                    ))

                }

            </div>
        </div>
    )
}
