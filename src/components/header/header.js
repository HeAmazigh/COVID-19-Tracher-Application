import React from 'react';
import './header.css';

const Header = ({country}) => {
    return(
        <div className="container__header">
            <h1> Suivi COVID-19 {country ? country: 'Le Monde'}  </h1>
            <h6> H.Amazigh </h6>
        </div>
    );
}

export default Header;