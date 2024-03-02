import React from 'react';
import iconRings from '../imgs/icon_rings.webp'

const Banner = () => {
    return (

        <div id="banner" className="image-container">
            <img id="icon_rings" src={iconRings} />
            <h1>Letícia Gabrielly & Erick Nathan</h1>
            <p>19 de julho de 2024</p>
        </div>

    );
}

export default Banner