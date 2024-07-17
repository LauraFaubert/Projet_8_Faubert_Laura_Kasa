import "../styles/Error/Error.scss";
import { Link } from "react-router-dom"

function Error (){
    return (
        <div className="error">
            <h1>404</h1>
            <p>{"Oups! La page que \nvous demandez n'existe pas."}</p>
            <Link to="/" className="error_BackTo">Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default Error