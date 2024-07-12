import React, {useContext} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {LogementContext} from '../components/App';
import Carrousel from'../components/Carrousel';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import '../styles/Logement/Logement.scss';

function Logement (){
    const {id} = useParams();
    const logements = useContext(LogementContext);
    

    if (!logements.length) {
        return <div>Loading...</div>;
    }
    const logement = logements.find(log => log.id === id);

    if (!logement){
        return <Navigate to="*" />;
    }
    return (
        <div className="logement">
          <Carrousel pictures={logement.pictures}/>
            <div className='logement_title_host'>
                <div>
                    <h2 className='logement_title'>{logement.title}</h2>
                    <p className='logement_location'>{logement.location}</p>
                    <Tags tags={logement.tags}/>
                </div>
                <div className='logement_details'>
                    <Host name={logement.host.name} picture={logement.host.picture}/>
                    <Rating rating={logement.rating} />
                </div>

            </div>
          <div className='logement_collapse'>
            <Collapse title="Description">
                <p>{logement.description}</p>
            </Collapse>
            <Collapse title="Équipements">
                <ul>
                    {logement.equipments.map((equipment, index)=> (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
          </div>
        </div>
      );
}
    
    export default Logement;
    

