import React from 'react'
import { ExploraItems } from './ExploraItems'
import { experiencias } from '../../data/experiencias'


export const ExploraCategoria = () => {
    return (
        <div className="categorias__container">
            <div className="categories__columnas">


            </div>

            <div className="categorias__show">
                <h2 className="categorias__title">Descubre Quindio</h2>
                <div className="explora__items-container">
                    {
                        experiencias.map( exp =>(
                            <ExploraItems key={ exp.id } experiencia={exp.experiencia} duracion={exp.duracion} descripcion={exp.descripcion} imgurl={exp.imgurl}/>
                        ))
                    }
                    

                </div>


            </div>
            
        </div>
    )
}
