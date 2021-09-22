import React from 'react'
import { Cards } from '../cards/Cards'
import { Motor } from '../static/Motor'
import { HomeBanner } from './HomeBanner'
import { HomeHero } from './HomeHero'
import { SectionOne } from './SectionOne'
import { SectionTwo } from './SectionTwo'

export const AromarteHome = () => {
    return (
        <div className="home__main-container">
            <HomeBanner/>
            <HomeHero/>
            <Motor/>
            <SectionTwo/>
            <SectionOne/>
            <Cards/>
            {/* <Footer/> */}
            
        </div>
    )
}
