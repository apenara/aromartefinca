import React from 'react'
import  exploraHero  from '../../assets/hero/explorahero.jpg'
import { TopNav } from '../static/TopNav'


export const ExploraHero = () => {
    return (
        <div className="explora__hero" style={{
            backgroundImage: `url(${exploraHero})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'}}>
            <div className="home__hero-elements" >
                <TopNav/>
                <h2 className="home__hero-caption">Guia Aromarte</h2>

            </div>
            
        </div>
    )
}
