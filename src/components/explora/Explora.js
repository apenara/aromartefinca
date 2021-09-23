import React from 'react'
// import { ExploraCategoria } from './ExploraCategoria'
import { ExploraHero } from './ExploraHero'
import { ExploraNada } from './ExploraNada'
// import { categorias } from '../../data/categorias'
import { experiencias } from '../../data/experiencias'
import { ExploraItems } from './ExploraItems'
import { Motor } from '../static/Motor'


export const Explora = () => {
    
    return (
        <div>
            <ExploraHero/>
            <Motor/>
            <div className="explora__categories-container">
                <div className="explora__categories-title">
                    <h2>Encuentra una Experienca</h2>
                </div>
                <div className="explora__categories-info">
                    <p>Elige una categoria de las experiencas que ofrecemos en la finca</p>
                    <div className="explora__categories-menu-container">
                        <div className="explora__categories-menu">Conocer Pueblos</div>
                        <div className="explora__categories-menu">Museos</div>
                        <div className="explora__categories-menu">Cultivos de Cafe</div>
                        <div className="explora__categories-menu">Atracciones</div>
                        <div className="explora__categories-menu">Restaurantes</div>

                    </div>

                </div>

            </div>
            <div className="explora__categories-show">
                {
                    experiencias.filter(cat => cat.categoria === "naturaleza").map(exp => (
                        <ExploraItems key={ exp.id } experiencia={exp.experiencia} duracion={exp.duracion} descripcion={exp.descripcion} imgurl={exp.imgurl}/>

                    ))
                }
                {/* <ExploraNada/> */}

            </div>

        </div>
    )
}
