import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";


export const Motor = () => {
    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = "https://wubook.net/js/wblib.jgz";
        scriptTag.async = true;
        document.body.appendChild(scriptTag);
    });
    return (
        <div className="motor__container">
            <Helmet>
            <script src="https://wubook.net/js/wblib.jgz" type="text/javascript">
            </script>
            </Helmet>

            <div id="_baror_" >
            <a href="https://es.wubook.nethttps://wubook.net/page/WooDoo-Booking-Engine-35.html"  target="_blank" rel="noreferrer">
            <img src="https://wubook.net/imgs/default/booking_by_wu.gif" alt="Booking Engine Wubook" title="Soluciones de gestión hotelera"  />
            </a>
            </div>
        </div>
    )
}

