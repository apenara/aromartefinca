import React from 'react'
import { SliderSmall } from '../sliders/SliderSmall'
import { explora } from '../../data/explora'

export const SectionOne = () => {


    return (
        <div className="section__container">
            <h2 className="section__title">Descubre el Quindio</h2>
            <div className="section__slider-container">
            {
                explora.map( value =>(
                    <SliderSmall key={ value.id } 
                        actividad={value.actividad}
                        duracion ={value.duracion}
                        imgurl= {value.imgurl}
                    />

                ))
            }
            </div>
        </div>
    )
}
