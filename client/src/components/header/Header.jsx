
import '../header/Header.css'
import { Link } from "react-router-dom";
import { } from 'react-icons/fa';
export const Header = () => {

    return (
        <>
<header>
    <nav>
<div className="logo"><Link to="/"><p className="logo-collor">Gražuolė</p></Link></div>

<ul>
    <li><Link to="/"><i className="fas fa-home"></i>Pagrindinis</Link></li>
    <li><Link to="/Services"><i className="fas fa-info-circle"></i>Grožio paslaugos</Link></li>
    <li className="link"><Link to="/Prices"><i className="fa-solid fa-sack-dollar"></i>Kainynas</Link></li>
    {/* <li><Link to="/login"><i className="fa fa-sign-in"></i>Prisijungimas</Link></li> */}
    <li className="register-btn"><Link to="/Register"><i className="fa fa-pencil"></i>Registracija</Link></li>
</ul>
</nav>
</header>
</>
       
    )
}