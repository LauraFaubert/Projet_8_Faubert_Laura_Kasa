import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import'../styles/HomePage/HomePage.scss';

function Home({logements}){
    return(
        <div className="home">
            <Banner />
            <div className="card_container">
                {logements.map(logement =>(
                     <Card
                     key={logement.id}
                     id={logement.id}
                     title={logement.title}
                     cover={logement.cover}
                     />

                ))}
            </div>
        </div>
    )

}
export default Home