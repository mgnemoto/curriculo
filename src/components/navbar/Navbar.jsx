import React from "react"
import './navbar.css'
import { Link } from "react-router-dom";


const Navbar = () =>{
    return(
        <ul className="navList">
            <div className="divLi">
                <Link to="/"><li className="navbarButton">Home</li></Link>
                <Link to="/educacion"><li className="navbarButton">Educacion</li></Link>
                <Link to="/trabajo"><li className="navbarButton">Experiencia laboral</li></Link>
                <Link to="/contacto"><li className="navbarButton">Contacto</li></Link>
            </div>
        </ul>

    )
}

export default Navbar;