import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Explora } from '../components/explora/Explora';
import { AromarteHome } from '../components/home/AromarteHome';
import { Habitaciones } from '../components/habitaciones/Habitaciones';
import { BottomNav } from '../components/static/BottomNav';
import { Footer } from '../components/static/Footer';
import { Habitacion } from '../components/habitaciones/Habitacion';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <BottomNav/>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        component={ AromarteHome }
                        />
                    <Route
                        path="/habitaciones"
                        component={ Habitaciones }
                        />
                    <Route
                        exact
                        path="/habitacion"
                        component={ Habitacion }
                        />
                    <Route
                        path="/explora"
                        component={ Explora }
                        />
                        
                </Switch>
                <Footer/>
                <div className="home__white-space">

            </div>
            </div>
        </Router>
    )
}
