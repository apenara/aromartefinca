import React from 'react'
import { Motor } from '../static/Motor'
import { HabitacionesDisplay } from './HabitacionesDisplay'
import { HabitacionesHero } from './HabitacionesHero'
import { habitaciones } from '../../data/habitaciones'



export const Habitaciones = () => {
    return (
        <div>
            <HabitacionesHero/>
            <Motor/>
            <div>
                {   
                habitaciones.map( val=>(
                    <HabitacionesDisplay key={val.id} nombre={val.nombre} lado={val.lado} descripcion={val.descripcion} acomodacion={val.acomodacion} imgurl={val.imgurl}/>
                ))
                }
            

            </div>
        </div>
    )
}
