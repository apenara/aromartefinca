import React from 'react'
import logo from '../../assets/logos/logoAlpha.png'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.png'
import tripa from '../../assets/icons/tripa.png'
import hotelplaya from '../../assets/logos/hotelplaya.png'
import ethnic from '../../assets/logos/ethnic.png'
import colombia from '../../assets/logos/colombia.png'
export const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__brands-container">
                <div className="footer__brands-img"><img src={hotelplaya} alt="Hotel Playa Club"/></div>
                <div className="footer__brands-img"><img src={ethnic} alt="Ethnic Thematic Hotel"/></div>
                <div className="footer__brands-img"><img src={colombia} alt="Colombia Tourism and Culture"/></div>

            </div>
            <div className="footer__info-container">
                <div className="footer__info-logo">
                    <div className="footer__logo">
                        <img src={logo} alt="Logo Aromarte"/>
                    </div>
                    <div className="footer__copywright">
                    <span>Copyright © 2021 Finca Hotel Aromarte</span>

                </div>


                </div>
                    <div className="footer__info-addres">
                        <address>
                            reservas@fincahotelaromarte.com <br/>
                            Vereda la cauchcera <br/>
                            Filandia Quindio <br/>
                            +573006946570
                        </address>
                    <div className="footer__info-social">
                        <img className="footer__icon" src={instagram} alt="instagram"/>
                        <img className="footer__icon" src={tripa} alt="tripadvisor"/>
                        <img className="footer__icon" src={facebook} alt="facebook"/>

                    </div>
                    </div>

                <div className="footer__info-navigation">
                    <div className="footer__info-nav-item">
                        <h4 className="footer__info-nav-item-title">Habitaciones</h4>
                        <ul>
                            <li>Yipao</li>
                            <li>Arriero</li>
                            <li>Guaduales</li>
                            <li>Barranquero</li>
                            <li>Quimbaya</li>
                            <li>Artesanal</li>
                        </ul>
                    </div>
                    <div className="footer__info-nav-item">
                        <h3 className="footer__info-nav-item-title">Experiencias</h3>
                    </div>
                    <div className="footer__info-nav-item">
                        <h3 className="footer__info-nav-item-title">Contacto</h3>
                    </div>
                    


                </div>


            </div>
                
        </footer>
    )
}
