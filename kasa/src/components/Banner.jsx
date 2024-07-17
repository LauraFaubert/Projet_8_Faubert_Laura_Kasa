import "../styles/Banner/Banner.scss"
import React from "react";
import { useLocation } from "react-router-dom";
import banner_1 from "../assets/images/Banner/Banner_1.png";
import banner_2 from "../assets/images/Banner/Banner_2.png";

function Banner (){
    const localisation = useLocation ();

    return (
        <div className="banner">
            {localisation.pathname === '/'&& (
                <div className="banner_container">
                <img src={banner_1} alt="Falaise et plage" className="banner_1"/>
                <h1>{"Chez vous,\npartout et ailleurs"}</h1>
                </div>
            )}
            {localisation.pathname === '/about'&& (
                <div className="banner_container">
                    <img src={banner_2} alt="Montage et rivière" className="banner_2" />
                </div>
            )}

        </div>
    )
}
export default Banner