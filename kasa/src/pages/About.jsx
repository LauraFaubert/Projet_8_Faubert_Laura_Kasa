import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import React, {useEffect, useState} from 'react';

function About() {
    const [infos, setInfos]= useState([]);

    useEffect(()=>{
        fetch('/data/apropos.json')
        .then(response =>response.json())
        .then(data=>setInfos(data))
        .catch(error =>console.error('Erreur lors de la récupération des infos:',error));
    }, []);
    return(
        <div className="about">
            <Banner />
            {infos.map((info,index)=>(
                <Collapse key={index} title={info.title}>
                    <p>{info.content}</p>
                </Collapse>
            ))}
        </div>
    )
}
export default About