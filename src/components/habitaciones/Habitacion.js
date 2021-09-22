import React from 'react'
import { HabitacionesHero } from './HabitacionesHero'
import tv from '../../assets/icons/servicios/tv.svg'
import alojamiento from '../../assets/icons/servicios/alojamiento.svg'
import toallas from '../../assets/icons/servicios/toallas.svg'
import cajafuerte from '../../assets/icons/servicios/cajafuerte.svg'
import amenities from '../../assets/icons/servicios/amenities.svg'
import minibar from '../../assets/icons/servicios/minibar.svg'
import lavamanos from '../../assets/icons/servicios/lavamanos.svg'
import closet from '../../assets/icons/servicios/closet.svg'

export const Habitacion = () => {
    return (
        <div >
            <HabitacionesHero/>
            <div className="habitacion__precontainer">
            <div className="habitacion__container">
                <div className="habitacion__container-elements">
                    <h1 className="habitacion__title">Habitacion Arriero</h1>
                    <p className="habitacion__descripcion">Conquistador de montañas. Arquitecto de una identidad única, propia de la raza antioqueña cuyas características aún se conservan en los pobladores actuales. La palabra arriero proviene del verbo arrear, que significa «estimular a las bestias para que echen a andar, para que sigan caminando o para que aviven el paso»; uso que, a su vez, produjo al parecer el grito 'arre', pronunciado para mandar a las caballerías
                    </p>
                    <div className="habitaciones__display-info-boton">Reservar</div>
                </div>
                <div className="habitacion__whitespace">

                </div>
                <div className="habitacion__servicios-container">
                    <div className="habitacion__servicios-img-container">
                        <img className="habitacion__servicios-img" src="http://fincahotelaromarte.com/wp-content/uploads/2021/02/Superior_King_Mural-min-1-scaled.jpg" alt="habitacion arriero"/>


                    </div>
                    <div className="habitacion__servicios-info">
                        <h2 className="habitacion__servicios-info-title">HABITACION INCLUYE</h2>
                        <div className="habitacion__servicios-info-elements">
                            <img className="habitacion__servicios-svg" src={tv} alt="Servicio de Television"/>
                            <img className="habitacion__servicios-svg" src={alojamiento} alt="Servicio de Television"/>
                            <img className="habitacion__servicios-svg" src={toallas} alt="Servicio de Television"/>
                            <img className="habitacion__servicios-svg" src={cajafuerte} alt="Servicio de Television"/>
                            <img className="habitacion__servicios-svg" src={amenities} alt="Servicio de Television"/>
                            <img className="habitacion__servicios-svg" src={minibar} alt="Servicio de Television"/>
                            <img className="habitacion__servicios-svg" src={lavamanos} alt="Servicio de Television"/>
                            <img className="habitacion__servicios-svg" src={closet} alt="Servicio de Television"/>

                        </div>
                        <div className="habitacion__servicios-info-elements-descripcion">
                            <ul>
                                <li className="habitacion__li">Television con servicio por cable</li>
                                <li className="habitacion__li">Caja fuerte</li>
                                <li className="habitacion__li">Baño privado con ducha</li>
                            </ul>

                        </div>

                    </div>

                </div>
                <div className="habitacion__servicios-img-gal">
                    <img className="habitacion__servicios-img-bot" src="http://fincahotelaromarte.com/wp-content/uploads/2021/02/Superior_King_Mural-min-1-scaled.jpg" alt="habitacion arriero"/>


                    

                </div>
            </div>
            </div>
        </div>

    )
}
