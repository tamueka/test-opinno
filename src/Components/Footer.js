import React from 'react';
import { NavLink } from 'react-router-dom'

export class Footer extends React.Component{
    render(){
        return(
            <div className="menu">
                <NavLink to="/index">Home</NavLink>
                <NavLink to="/carrusel">Carrusel</NavLink>
                <p>Samuel ruiz de la Rosa</p>
            </div>
        );
    }
}