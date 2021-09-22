import React from 'react'
import { SliderCategorias } from '../sliders/SliderCategorias'
import { ExploraCategoria } from './ExploraCategoria'
import { ExploraHero } from './ExploraHero'
import { ExploraNada } from './ExploraNada'
// import { categorias } from '../../data/categorias'


export const Explora = () => {
    
    return (
        <div>
            <ExploraHero/>
            <div className="explora__categories-container">
                {/* {
                    categorias.map( cat =>(
                        <SliderCategorias key={ cat.id } nombre={ cat.nombre } />
                    ))
                } */}
                <SliderCategorias/>

            </div>
            <div className="explora__categories-show">
                <ExploraCategoria/>
                <ExploraNada/>

            </div>

        </div>
    )
}
