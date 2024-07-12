import "../styles/Card/Card.scss";
import { Link } from "react-router-dom";


function Card({id, title, cover}){    
    return (
        <div className="card">
            <Link to={`./logement/${id}`} className="card_contenant">
                <img src={cover} alt={title} className="card_image"/>
                <h2 className="card_title">{title}</h2>
            </Link>
        </div>
    )

}

export default Card