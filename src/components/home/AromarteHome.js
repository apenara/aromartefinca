import React from 'react'
import { Motor } from '../static/Motor'
import { HomeBanner } from './HomeBanner'
import { HomeHero } from './HomeHero'
import { SectionOne } from './SectionOne'
import { SectionThree } from './SectionThree'
import { SectionTwo } from './SectionTwo'
import { Cards } from '../cards/Cards'


export const AromarteHome = () => {
    return (
        <div className="home__main-container">
            <HomeBanner/>
            <HomeHero/>
            <Motor/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <Cards/>
            
        </div>
    )
}
