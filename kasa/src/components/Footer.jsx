import logoFooter from'../assets/images/'
import "../styles/Footer/Footer.scss"

function Footer (){
    return (
        <div className="Footer">
            <img src={logoFooter} alt="Logo Kasas" className ="Footer_logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer